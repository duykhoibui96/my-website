import React from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  flex: 1;
  display: flex;

  * {
    margin: auto 0;
  }
`;

export default ({ progress, color }) => (
  <ProgressBar>
    <div style={{ width: "80%" }}>
      <div style={{ width: `${progress}%`, background: color, height: 20 }} />
    </div>
    <small style={{ width: "20%" }}>{progress} %</small>
  </ProgressBar>
);
