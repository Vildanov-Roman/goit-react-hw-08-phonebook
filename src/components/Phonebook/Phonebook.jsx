import { ContactForm } from './ContactForm/ContactForm';
import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css';

const Text = ({ value }) => (
  <div className={css.text}>
    {value.split('').map((char, i) => (
      <div className={css.letter} style={{ '--delay': `${i * 0.2}s` }}>
        <span className={css.source}>{char}</span>
        <span className={css.shadow}>{char}</span>
        <span className={css.overlay}>{char}</span>
      </div>
    ))}
  </div>
);

const Phonebook = () => {
  return (
    <>
      <div className={css.app}>
        <Text value="Phonebook" />
      </div>
      <ContactForm />
      <div className={css.app}>
        <Text value="Contacts" />
      </div>
      <Filter />
      <ContactList />
    </>
  );
};

export default Phonebook;

// 12
