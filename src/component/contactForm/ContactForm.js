import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.name.length !== 0) {
      if (this.props.onCompareContact(this.state.name)) {
        alert(`${this.state.name} is already in contacts`);
      } else {
        this.props.onAddContact({ ...this.state });
      }
    } else {
      alert("Please enter a contact name!");
    }
    this.setState({
      name: "",
      number: ""
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="text"
            name="number"
            onChange={this.handleChange}
            value={number}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string
};
