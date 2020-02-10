import React from "react";
import PropTypes from "prop-types";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDeleteContact }) => (
  <div className={css.container}>
    <span className={css.name}>{name}</span>
    <span>{number}</span>
    <button className={css.button} type="button" onClick={onDeleteContact}>
      Delete
    </button>
  </div>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default Contact;
