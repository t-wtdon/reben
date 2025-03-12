import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const bg = require("../../../../assets/images/home/mv.jpg");

const Container = styled.div<{ bgImage: string }>`
  position: relative;
  padding: 60px 0;
  background: center center no-repeat url(${(props) => props.bgImage});
  background-size: cover;
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1080px;
  margin: 0 auto;
`;

const Box = styled.div`
  padding: 20px;
  background: #fff;
  width: 100%;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 20px;
  }
`;

const Text = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  word-break: break-all;
`;
const SmallText = styled.p`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  font-weight: normal;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 24px;
`;

const Item = styled.li`
  margin: 0;
  width: calc(50% - 12px);
`;

const LinkItem = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  cursor: pointer !important;
  color: #333;

  &:link,
  &:visited {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  width: 24px;
  margin-right: 12px;
  color: #333;
`;

export const Info = () => {
  return (
    <Container bgImage={bg}>
      <ContentWrapper>
        <Heading title="お問い合わせ" />
        <List>
          <Item>
            <LinkItem to="tel:000-1111-1111">
              <Icon icon={faPhone} size="2x" />
              000-1111-1111
            </LinkItem>
          </Item>
          <Item>
            <LinkItem to="mailto:sample@gmail.com">
              <Icon icon={faEnvelope} size="2x" />
              sample@gmail.com"
            </LinkItem>
          </Item>
        </List>

        <LinkItem to="/recruit">採用についてはこちら</LinkItem>
      </ContentWrapper>
    </Container>
  );
};
