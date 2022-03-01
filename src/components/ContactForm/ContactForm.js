import PropTypes from "prop-types";
import { useState } from "react";
import { nanoid } from "nanoid";
import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
  StyledButton,
} from "./ContactForm.styled";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handlleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handlleSubmit = (event) => {
    event.preventDefault();
    const id = nanoid();
    onSubmit(id, name, number);
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handlleSubmit}>
        <StyledLabel>
          <StyledSpan>Name</StyledSpan>
          <StyledInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handlleChange}
            value={name}
          />
        </StyledLabel>
        <StyledLabel>
          <StyledSpan>Number</StyledSpan>
          <StyledInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handlleChange}
            value={number}
          />
        </StyledLabel>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
