import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const mv = require("../../../../assets/images/home/mv.jpg");

const MainVisualWrap = styled.div`
  position: relative;
  display: flex;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const MainVisual = styled.div<{ mvImage: string }>`
  width: 100%;
  height: calc(100vh - 70px);
  margin: 0 auto;
  background: center center no-repeat url(${(props) => props.mvImage});
  background-size: cover;
`;

const Box = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
`;

const Title = styled.h3`
  display: inline-block;
  background: #0288d1;
  color: #fff;
  margin: 8px 0;
  font-size: 42px;
`;

export const Mv = () => {
  return (
    <MainVisualWrap>
      <Box>
        <Title>関わる</Title>
        <br />
        <Title>全ての人を幸せに。</Title>
      </Box>

      <MainVisual mvImage={mv} />
    </MainVisualWrap>
  );
};
