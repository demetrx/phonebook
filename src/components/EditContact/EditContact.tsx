import {
  useEditContactMutation,
  useGetContactsQuery,
} from 'services/contacts-api';
import toast from 'react-hot-toast';
import Box from 'components/UI/Box';
import { IContact } from 'global/types';
import { SubmitHandler } from 'react-hook-form';
import useCustomForm from 'hooks/useCustomForm';
import { Button } from 'components/UI/Button/Button';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

interface Props {
  id: string;
  onClose(): void;
}

const EditContact = ({ id, onClose }: Props) => {
  const { data: contacts } = useGetContactsQuery();
  const [editContact, { isLoading }] = useEditContactMutation();
  const { name, number } = contacts?.find(contact => contact.id === id)!;

  const { handleSubmit, Field, Submit, Form } = useCustomForm({ name, number });

  const handleEdit: SubmitHandler<Partial<IContact>> = data => {
    if (contacts?.find(c => c.name === data.name && !name)) {
      return toast.error(name + ' is already in contacts!');
    }

    editContact({ id, ...data }).then(result => {
      if ('error' in result) {
        toast.error('Failed to edit contact, retry later!');
      } else {
        toast.success('Contact edited successfully');
      }
    });

    onClose();
  };

  return (
    <>
      <Box display="flex" gap={3} mb={4} justifyContent="center">
        <Button icon={<PermContactCalendarIcon />} as="div" />
      </Box>

      <Form onSubmit={handleSubmit(handleEdit)}>
        <Field
          ac
          label="Name"
          pattern={{
            value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            message: 'May contain only letters, apostrophe, dash and spaces',
          }}
        />
        <Field
          ac
          type="tel"
          label="Number"
          pattern={{
            value:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message:
              'This must be digits and may contain spaces, dashes, parentheses or start with +.',
          }}
        />
        <Submit label="Edit" isLoading={isLoading} />
      </Form>
    </>
  );
};

export default EditContact;
