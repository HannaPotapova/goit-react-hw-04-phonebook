import React, {useState, useEffect} from "react";
import ContactForm from "./ContactBook/ContactForm";
import ContactList from "./ContactBook/ContactList";
import Filter from "./ContactBook/Filter";
import { nanoid } from 'nanoid';
import css from './ContactBook/ContactBook.module.css'

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("myContacts")) ?? [];
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);

  function deleteContact(contactId) {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  }

  function changeFilter(event) {
    setFilter(event.currentTarget.value);
  };

  function contactAdd(name, number) {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = contacts.map(contact => contact.name).includes(name);
    
    if (isExist) {
      alert(`${name} is already in contact`);
      return;
    }

    setContacts([contact, ...contacts]);
  }

  function filteredContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter
    ));
  }

  return (
      <div>
        <div className={css.box}>
          <h1>Phonebook</h1>
          <ContactForm
            contactAdd={contactAdd}
          />
        </div>
        <div className={css.box}>
          <h2>Contacts</h2>
          <Filter
            findeName={changeFilter} />
          <ContactList
            contacts={filteredContacts()}
            deleteContact={deleteContact}            
          />
        </div>
      </div>
    )  
}

export default App;