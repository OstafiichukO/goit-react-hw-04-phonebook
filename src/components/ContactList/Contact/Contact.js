import PropTypes from "prop-types";
import { StyledButton, StyledSpan, StyledLi } from "./Contact.styled";

const Contact = ({ contacts, onClick }) => {
  return (
    <>
      {contacts.map((contact) => {
        const { id, name, number } = contact;
        return (
          <StyledLi key={id}>
            <StyledSpan>
              &#9742; {name}: {number}
            </StyledSpan>
            <StyledButton type="button" name={id} onClick={onClick}>
              Delete
            </StyledButton>
          </StyledLi>
        );
      })}
    </>
  );
};

export default Contact;

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
