import PropTypes from "prop-types";
import {
  StyledLabel,
  StyledInput,
  StyledSpan,
  StyledForm,
} from "./Filter.styled";

const Filter = ({ filter, onChange }) => {
  return (
    <StyledForm>
      <StyledLabel>
        <StyledSpan>Find contacts by name</StyledSpan>
        <StyledInput type="text" onChange={onChange} value={filter} />
      </StyledLabel>
    </StyledForm>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
