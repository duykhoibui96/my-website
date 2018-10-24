import styled from "styled-components";
import { FONT_SIZE } from "../../styles";

const Select = styled.select`
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
  transition: border-bottom-color .5s;
`;

export default Select;
