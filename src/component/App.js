import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contsctList/ContactList";
import ContactFilter from "./contactFilter/ContactFilter";
import css from "./App.module.css";
import uuid from "uuid";

const filterContact = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  addContact = newContact => {
    const contactToAdd = {
      ...newContact,
      id: uuid()
    };

    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd]
    }));
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id)
    }));
  };

  compareContact = name => {
    return this.state.contacts.some(contact => contact.name === name);
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = filterContact(contacts, filter);

    return (
      <div className={css.contactApp}>
        <h2>Phonebook</h2>
        <ContactForm
          onAddContact={this.addContact}
          onCompareContact={this.compareContact}
        />

        <h2 className={css.contactsTitle}>Contacts</h2>
        {contacts.length > 2 && (
          <ContactFilter filter={filter} onChangeFilter={this.changeFilter} />
        )}

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
