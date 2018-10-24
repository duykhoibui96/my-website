import React, { Component } from "react";
import styled from "styled-components";
import { COLORS } from "../core/styles";
import ProgressBar from "../core/components/chart/progress-bar";
import ImageLink from "../core/components/img/link";
import AvatarImg from "../res/img/avatar.jpg";
import FacebookImage from "../res/img/fb.png";
import LinkedInImage from "../res/img/linkedin.png";

const Wrapper = styled.div`
  display: flex;
`;

const InfoBlock = styled.div`
  margin-bottom: 50px;
`;

const InfoHeader = styled.h2`
  color: ${COLORS.LIGHT};
  border-top: 1px solid ${COLORS.LIGHT};
  border-bottom: 1px solid ${COLORS.LIGHT};
  padding-top: 10px;
  padding-bottom: 10px;
`;

const BasicInfoWrapper = styled.div`
  flex: 1;
  border-right: 1px solid ${COLORS.LIGHT};
`;

const Avatar = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
`;

const Title = styled.p`
  color: ${COLORS.LIGHT};
  display: flex;

  * {
    margin: auto 10px;
  }
`;

const MainInfoWrapper = styled.div`
  flex: 3;
  padding-left: 30px;
  height: 600px;
  overflow-y: auto;
`;

const Progress = styled.span`
  padding: 10px;
  background: ${props => props.color || COLORS.PRIMARY};
`;

class Info extends Component {
  render() {
    return (
      <Wrapper>
        <BasicInfoWrapper>
          <div style={{ textAlign: "center" }}>
            <Avatar src={AvatarImg} />
          </div>
          <InfoBlock>
            <InfoHeader>CONTACT</InfoHeader>
            <Title>
              <i className="material-icons">contact_phone</i>
              <span>+84934194305</span>
            </Title>
            <Title>
              <i className="material-icons">contact_mail</i>
              <span>duykhoi.bui96@gmail.com</span>
            </Title>
            <div>
              <ImageLink
                link="https://www.facebook.com/tony.khoi.1"
                image={FacebookImage}
                title="Facebook link"
              />
              <ImageLink
                link="https://www.facebook.com/tony.khoi.1"
                image={LinkedInImage}
                title="LinkedIn link"
              />
            </div>
          </InfoBlock>
          <InfoBlock>
            <InfoHeader>SKILLS</InfoHeader>
            <p>JAVASCRIPT</p>
            <ProgressBar color="red" progress={70} />
            <p>C#</p>
            <ProgressBar color="blue" progress={50} />
            <p>JAVA</p>
            <ProgressBar color="green" progress={50} />
          </InfoBlock>
        </BasicInfoWrapper>
        <MainInfoWrapper>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: 50 }}>BUI DUY KHOI</h1>
            <p>*******</p>
            <h2>SOFTWARE ENGINEER</h2>
          </div>
          <InfoBlock>
            <InfoHeader>>> SUMMARY</InfoHeader>
          </InfoBlock>
          <InfoBlock>
            <InfoHeader>>> EXPERIENCE</InfoHeader>
          </InfoBlock>
        </MainInfoWrapper>
      </Wrapper>
    );
  }
}

export default Info;
