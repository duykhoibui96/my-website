import React from "react";
import styled from "styled-components";

const ImageLink = styled.a`
  cursor: pointer;

  & > img {
    width: 50px;
    height: auto;
  }
`;

export default ({ image, link, title }) => (
  <ImageLink href={link} target="_blank">
    <img src={image} alt="Image link" title={title} />
  </ImageLink>
);
