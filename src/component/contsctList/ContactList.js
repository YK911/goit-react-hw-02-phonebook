import React from "react";
import PropTypes from "prop-types";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) =>
  contacts.length > 0 && (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact
            {...contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;
