import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import headerLogo from "../res/img/header-logo-2.png";
import { COLORS, FONT_SIZE } from "../core/styles";
import Link from "./components/link";
import Profile from "./profile";

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  width: 90%;
  left: 5%;
  margin-bottom: 50px;
  padding: 0;

  * {
    color: ${COLORS.LIGHT};
  }
`;

const Logo = styled.img`
  height: auto;
  width: 50px;
`;

const Menu = styled.div`
  border-bottom: 1px solid white;
  width: 100%;

  * {
    color: ${COLORS.LIGHT};
  }
`;

const Content = styled.div`
  padding-top: 10px;
  width: 100%;
`;

const MenuItem = styled.div`
  margin: auto 0;
  cursor: pointer;
  margin-right: 50px;

  & > a {
    font-weight: bold;
    color: ${COLORS.LIGHT};
    font-size: ${FONT_SIZE.LARGE};
    padding-bottom: 10px;
    ${props => props.selected && "border-bottom: 1px solid white;"} :hover {
      color: red;
      border-bottom-color: red;
    }
  }
`;

class Main extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Menu>
            <div style={{ flex: 2, display: "flex" }}>
              <MenuItem style={{ textAlign: "center", padding: '10px 0' }}>
                <Logo src={headerLogo} />
              </MenuItem>
              <MenuItem>
                <Link path="/profile" icon="info">
                  PROFILE
                </Link>
              </MenuItem>
              <MenuItem>
                <Link path="/blogs" icon="access_time">
                  BLOGS
                </Link>
              </MenuItem>
            </div>
            <div style={{ flex: 1, textAlign: "right" }} />
          </Menu>
          <Content>
            <Redirect exact from="/" to="/profile" />
            <Route path="/profile" component={Profile} />
          </Content>
        </Wrapper>
      </Router>
    );
  }
}

export default Main;
