import styled from "styled-components";
import { FONT_SIZE, COLORS } from "../../styles";

const TextInput = styled.input`
  font-family: Arial;
  width: 100%;
  padding: 12px 20px;
  margin: 10px 0;
  box-sizing: border-box;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom-color: #C9CCD4;
  outline: none;
  background: transparent;
  font-size: ${FONT_SIZE.MEDIUM};
  color: ${COLORS.LIGHT};
  transition: border-bottom-color .5s;

  :focus {
    border-bottom-color: black;
  }
`;

export default TextInput;
