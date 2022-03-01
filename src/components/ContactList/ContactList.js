import PropTypes from "prop-types";
import Contact from "./Contact";
import { StyledUl } from "./ContactList.styled";

const ContactsList = ({ contacts, onClick }) => {
  return (
    <>
      <StyledUl>
        <Contact contacts={contacts} onClick={onClick} />
      </StyledUl>
    </>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
