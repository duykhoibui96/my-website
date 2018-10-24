import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../../core/styles";

const LinkWrapper = styled.div`
  flex: 1;
  cursor: pointer;
  display: flex;

  .selected {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }

  & > a {
    padding: 10px 20px;
    display: flex;
    text-decoration: none;
    font-size: ${FONT_SIZE.LARGE}
    font-weight: bold;

    * {
      margin: auto 0;
    }

    & > i {
      margin-right: 10px;
    }

    &:hover {
      * {
        color: red;
      }
    }
  }
`;

export default ({ children, path, icon, hoverColor = "red" }) => (
  <LinkWrapper hoverColor={hoverColor} icon={icon}>
    <NavLink to={path} activeClassName="selected">
      <i className="material-icons">{icon}</i>
      <span>{children}</span>
    </NavLink>
  </LinkWrapper>
);
