import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";
import { Heading } from "../../Heading";

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 60px 20px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 0;
  }
`;

export const Career = () => {
  return (
    <Container>
      <Heading title="実績紹介" />

      <p>TODO: ここは実績実績紹介</p>
    </Container>
  );
};
