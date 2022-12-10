import React, {Component} from "react";
import ContactForm from "./ContactBook/ContactForm";
import ContactList from "./ContactBook/ContactList";
import Filter from "./ContactBook/Filter";
import { nanoid } from 'nanoid';
import css from './ContactBook/ContactBook.module.css'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  contactAdd = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = this.state.contacts.map(contact => contact.name).includes(name);
    if (isExist) {
      alert(`${name} is already in contact`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter
    ));
  }

  render() { 
    return (
      <div>
        <div className={css.box}>
          <h1>Phonebook</h1>
          <ContactForm
            contactAdd={this.contactAdd}
          />
        </div>
        <div className={css.box}>
          <h2>Contacts</h2>
          <Filter
            findeName={this.changeFilter} />
          <ContactList
            contacts={this.filteredContacts()}
            deleteContact={this.deleteContact}            
          />
        </div>
      </div>
    )  
  }
}

export default App;