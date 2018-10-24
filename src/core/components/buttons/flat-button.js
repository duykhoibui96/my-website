import styled from "styled-components";
import { FONT_SIZE, COLORS } from "../../styles";

const FlatButton = styled.button`
  border-radius: 5px
  border: none;
  cursor: pointer;
  padding: 15px 30px;
  margin: 10px;
  font-weight: bold;
  font-size: ${props =>
    props.large
      ? FONT_SIZE.LARGE
      : props.small
        ? FONT_SIZE.SMALL
        : FONT_SIZE.MEDIUM};
  background: ${props => {
    const { light, dark, warning, danger } = props;
    let color = COLORS.PRIMARY;

    if (light) {
      color = COLORS.LIGHT;
    } else if (dark) {
      color = COLORS.DARK;
    } else if (warning) {
      color = COLORS.WARNING;
    } else if (danger) {
      color = COLORS.DANGER;
    }

    return color;
  }};
  color: ${props => (props.light ? COLORS.DARK : COLORS.LIGHT)};
  transition: background 0.5s, box-shadow 0.5s;
  ${props => props.fullWidth ? 'width: 100%;' : ''}

  :disabled {
    background: gray;
    color: white;
    cursor: not-allowed;
  }

  :enabled:hover {
    box-shadow: 0px 5px 18px -1px rgba(0, 0, 0, 0.75);
    background: ${props => {
      const { light, dark, warning, danger } = props;
      let color = "#5C85DF";

      if (light) {
        color = "#CDD0D7";
      } else if (dark) {
        color = "#2C2A2A";
      } else if (warning) {
        color = "#FA8B29";
      } else if (danger) {
        color = "#F92C1C";
      }

      return color;
    }};
  }

`;

export default FlatButton;
