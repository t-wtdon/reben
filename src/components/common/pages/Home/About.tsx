import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";
import { MoreButton } from "../../MoreButton";

const Wrapper = styled.div`
  position: relative;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: inline-block;
    width: 70%;
    height: 100%;
    background: linear-gradient(
      to right,
      #f5f7f9 0%,
      #f5f7f9 85%,
      transparent 100%
    );
    z-index: -1;
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

const Title = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 32px;
`;

const Text = styled.p`
  width: 70%;
  margin: 0 auto;
  line-height: 1.8;
  font-size: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const Strong = styled.span`
  font-weight: bold;
`;

const Centering = styled.div`
  text-align: center;
`;

const SubTitle = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 24px;
  margin: 40px 0 16px;
  padding-bottom: 4px;
  border-bottom: 3px solid #29b6f6;
`;

export const About = () => {
  return (
    <Wrapper>
      <Container>
        <Title>株式会社Rebenとは</Title>

        <Text>
          私たちの会社名は、
          <Strong>「Relationship（信頼関係）」 と 「Leben（人生）」</Strong>
          を掛け合わせた造語です。
          <br />
          この名前には、「私たちが関わるすべての人との信頼関係を大切にし、その人の人生がより良いものとなるよう支えていきたい」という想いが込められています。
        </Text>

        <Centering>
          <SubTitle>「関わるすべての人を幸せに。」 </SubTitle>
        </Centering>
        <Text>
          これが私たちの理念です。
          <br />
          社員一人ひとりに寄り添い、その人生をより豊かで充実したものにするために、私たちは存在します。
          そして、そのためにはまず私たち自身が幸せであることが大切だと考えています。
          <br />
          だからこそ、働く環境やチームのあり方にもこだわり、共に成長し、共に喜びを分かち合える会社を目指し、
          お客様、社員、パートナー企業――関わるすべての人が笑顔になれる未来を創るために、私たちはこれからも挑戦し続けます。
        </Text>

        <MoreButton text="もっと見る" link="/about" marginTop={40} />
      </Container>
    </Wrapper>
  );
};
