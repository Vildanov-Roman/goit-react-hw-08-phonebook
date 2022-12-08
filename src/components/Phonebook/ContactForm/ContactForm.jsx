import { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { addContact } from '../../../redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import css from '../RegisterForm/RegisterForm.module.css';
import confetti from 'canvas-confetti';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    confetti({
      particleCount: 200,
      spread: 200,
    });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'contactName':
        setName(value);
        break;
      case 'contactNumber':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts?.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return toast.error(`${name} is already in Phonebook`);
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label} htmlFor={nameId}>
        Name
      </label>
      <input
        id={nameId}
        type="text"
        name="contactName"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Input name"
        className={css.input}
      />
      <label className={css.label} htmlFor={numberId}>
        Number
      </label>
      <input
        id={numberId}
        type="tel"
        name="contactNumber"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Input number"
        className={css.input}
      />
      <button type="submit" className={css.btn} onClick={onClick}>
        Add contact
      </button>
    </form>
  );
};
