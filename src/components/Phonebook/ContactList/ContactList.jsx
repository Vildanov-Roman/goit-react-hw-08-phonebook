import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../../redux/contacts/contactsOperations';
import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.data);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const contactsToRender = getFilteredContacts();

  return (
    <ul className={css.list}>
      {contactsToRender?.map(item => (
        <ContactItem key={item.id} data={item} />
      ))}
    </ul>
  );
};
