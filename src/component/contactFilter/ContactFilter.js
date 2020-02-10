import React from "react";
import PropTypes from "prop-types";
import css from "./ContactFilter.module.css";

const ContactFilter = ({ filter, onChangeFilter }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={onChangeFilter}
        value={filter}
      />
    </label>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

export default ContactFilter;
