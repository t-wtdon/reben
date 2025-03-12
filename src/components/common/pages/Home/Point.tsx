import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";
import { Heading } from "../../Heading";

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const List = styled.ul`
  margin-bottom: 0;
`;

const Item = styled.li`
  display: flex;
  gap: 40px;
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;
const Image = styled.img`
  width: 40%;
  height: 500px;
  object-fit: cover;
`;
const SubTitle = styled.p`
  position: relative;
  font-size: 16px;

  &:before {
    position: absolute;
    bottom: -6px;
    left: 0;
    display: inline-block;
    content: "";
    width: 50px;
    height: 2px;
    background: #81d4fa;
  }
`;
const Title = styled.h3`
  font-size: 28px;
  color: #0288d1;
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 1.8;
`;

const img1 = require("../../../../assets/images/home/staff1.jpg");
const img2 = require("../../../../assets/images/home/staff2.jpg");
const img3 = require("../../../../assets/images/home/staff3.jpg");

export const Point = () => {
  return (
    <Container>
      <Heading title="私たちの強み" />
      <List>
        <Item>
          <Image src={img1} alt="" />

          <div>
            <SubTitle>専門性 × 柔軟性で最適な人材を提供</SubTitle>
            <Title>
              豊富な経験と
              <br />
              高い対応力を持つスタッフがサポート
            </Title>
            <Text>
              私たちは、通信業界や販売促進イベントに精通した経験豊富なスタッフを多数抱えています。
              <br />
              業務委託としての柔軟な対応力を強みに、クライアントのニーズに合わせた最適な人材を提供。
              高品質なサービスで、長期的なパートナーシップを築きます。
            </Text>
          </div>
        </Item>

        <Item>
          <div>
            <SubTitle>成功するイベントには、確かな準備と運営力がある</SubTitle>
            <Title>
              計画から当日運営まで、
              <br />
              一貫したサポート
            </Title>
            <Text>
              数多くのイベント運営に携わってきた私たちは、効果的な運営ノウハウを持っています。
              <br />
              事前の企画・準備から当日のスムーズな進行まで、全てのプロセスを支援。
              イベントの成功に向けて、最適なチーム体制で対応します。
            </Text>
          </div>

          <Image src={img2} alt="" />
        </Item>

        <Item>
          <Image src={img3} alt="" />

          <div>
            <SubTitle>家電・通信のプロが、お客様に最適な提案を</SubTitle>
            <Title>
              最新の知識と販売力で、
              <br />
              売上向上を実現
            </Title>
            <Text>
              家電量販店や通信キャリアショップでは、知識豊富で接客スキルの高いスタッフが活躍。
              <br />
              お客様に最適な提案を行い、満足度と売上の向上を両立します。
              研修制度も充実し、業界の最新情報を常にキャッチアップしています。
            </Text>
          </div>
        </Item>
      </List>
    </Container>
  );
};
