import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

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

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  width: calc(50% - 10px);
  text-align: center;

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
  }
`;

const Name = styled.h4`
  margin: 20px 0;
  font-weight: bold;
  text-align: left;
`;

const Text = styled.p`
  margin: 8px 0;
  text-align: left;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export const Access = () => {
  return (
    <Container>
      <Heading title="アクセス" />

      <List>
        <Item>
          <iframe
            title="株式会社Reben"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.2522736620845!2d140.89906427583628!3d38.2040393718803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a2708c19f8a3d%3A0xefe8716399f23a7e!2z44Or44OO44Ki44O844Or!5e0!3m2!1sja!2sjp!4v1745742304373!5m2!1sja!2sjp"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Name>株式会社Reben</Name>
          <Text>
            <BoldText>住所:</BoldText> サンプル県
          </Text>
          <Text>
            <BoldText>お車の方:</BoldText> ○○インターを出て、約5分
          </Text>
          <Text>
            <BoldText>電車の方:</BoldText> ○○駅から徒歩5分
          </Text>
          <Text>
            <BoldText>バスの方:</BoldText> ○停留所で降車、そこから徒歩5分
          </Text>
        </Item>
      </List>
    </Container>
  );
};
