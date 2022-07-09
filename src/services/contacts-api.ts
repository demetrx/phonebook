import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'redux/store';
import { IContact, LoginCredentials, SignupCredentials } from 'global/types';

type ContactsResponse = IContact[];

export const api = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: (credentials: SignupCredentials) => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials: LoginCredentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
    refresh: builder.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
    }),
    getContacts: builder.query<ContactsResponse, void>({
      query: () => '/contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id } as const)),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation<IContact, Partial<IContact>>({
      query: data => {
        return { url: '/contacts', method: 'POST', body: data };
      },
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    removeContact: builder.mutation<{}, string>({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: (_, __, id) => [{ type: 'Contacts', id }],
    }),
    editContact: builder.mutation<IContact, Partial<IContact>>({
      query: ({ id, ...body }) => {
        return { url: `/contacts/${id}`, method: 'PATCH', body };
      },
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
  // ----- Too many requests: devTools trigger refocus
  // refetchOnFocus: true,
  // refetchOnReconnect: true,
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshQuery,
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
  useEditContactMutation,
} = api;
