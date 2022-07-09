import { useMemo } from 'react';
import { useAppSelector } from 'redux/hooks';
import { createSelector } from '@reduxjs/toolkit';
import { useGetContactsQuery } from 'services/contacts-api';
import { IContact } from 'global/types';

const useContactsList = () => {
  const filter = useAppSelector(state => state.filter);

  const getVisibleContacts = useMemo(() => {
    const emptyArray: [] = [];
    return createSelector(
      [result => result.data as IContact[], (_, filter: string) => filter],
      (contacts, filter) =>
        contacts?.filter(({ name }) => name.toLowerCase().includes(filter)) ??
        emptyArray
    );
  }, []);

  const { filteredContacts, isLoading, isFetching, error } =
    useGetContactsQuery(undefined, {
      selectFromResult: result => ({
        ...result,
        filteredContacts: getVisibleContacts(result, filter),
      }),
    });

  return { isLoading, isFetching, error, filteredContacts };
};

export default useContactsList;
