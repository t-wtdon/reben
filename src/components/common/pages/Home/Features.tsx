import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBullhorn,
  faTv,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const bgImage = require("../../../../assets/images/home/sample.jpg");

const sample1 = require("../../../../assets/images/home/sample1.jpg");
const sample2 = require("../../../../assets/images/home/sample2.jpg");
const sample3 = require("../../../../assets/images/home/sample3.jpg");
const sample4 = require("../../../../assets/images/home/sample4.jpg");

const Wrapper = styled.div<{ image: string }>`
  position: relative;
  background-image: url(${(props) =>
    props.image}); // 画像パスを変更してください  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 30, 45, 0.7);
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, transparent, rgba(5, 20, 30, 1));
    z-index: 2;
  }
  > * {
    position: relative;
    z-index: 3; // コンテンツを一番上に
  }
`;

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
  list-style-type: none;
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
`;
const Item = styled.li`
  position: relative;
  width: 50%;
  height: 400px;
  overflow: hidden;

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
  }
`;

const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
`;

const ContentWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  z-index: 2;
  color: #fff;
`;

const H3heading = styled.h3`
  margin: 0 0 8px;
  color: #fff;
  font-size: 16px;
`;

const Text = styled.p`
  color: #fff;
  line-height: 1.7;
  margin: 0;
  font-size: 14px;
`;

export const Features = () => {
  return (
    <Wrapper image={bgImage}>
      <Container>
        <Heading title="事業内容" color="#fff" />

        <List>
          <Item>
            <ImageItem src={sample1} alt="" />
            <Overlay />
            <ContentWrap>
              <H3heading>業務委託請負</H3heading>
              <Text>
                販売や接客など、幅広い業務をプロスタッフが代行し、業務効率と成果を最大化します。
              </Text>
            </ContentWrap>
          </Item>
          <Item>
            <ImageItem src={sample2} alt="" />
            <Overlay />
            <ContentWrap>
              <H3heading>イベント運営スタッフ</H3heading>
              <Text>
                商業施設でのイベントやキャンペーンを企画から運営まで一貫してサポートします。
              </Text>
            </ContentWrap>
          </Item>
          <Item>
            <ImageItem src={sample3} alt="" />
            <Overlay />
            <ContentWrap>
              <H3heading>家電量販店スタッフ</H3heading>
              <Text>
                家電販売のプロが、お客様に最適な商品やプランを提案し、売上アップに貢献します。
              </Text>
            </ContentWrap>
          </Item>
          <Item>
            <ImageItem src={sample4} alt="" />
            <Overlay />
            <ContentWrap>
              <H3heading>通信キャリアショップスタッフ</H3heading>
              <Text>
                通信ショップでの販売・契約業務を通じて、顧客満足度の向上を図ります。
              </Text>
            </ContentWrap>
          </Item>
        </List>
      </Container>
    </Wrapper>
  );
};
