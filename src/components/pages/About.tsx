import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { Info } from "../common/Info";
import { PageHeading } from "../common/PageHeading";
import { ScrollToTop } from "../common/ScrollToTop";

// const story1 = require("../../assets/images/about/story1.jpg");
// const story2 = require("../../assets/images/about/story2.jpg");
// const story3 = require("../../assets/images/about/story3.jpg");

export const About = () => {
  const ContentInner = styled.div`
    width: 100%;
    max-width: 1080px;
    width: calc(100% - 40px);
    margin: 0 auto 80px;
    padding: 0 20px;

    @media (max-width: ${breakpoints.sp}) {
      padding: 0 12px;
      margin: 0 auto 80px;
    }
  `;

  const Title = styled.p`
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

  const Box = styled.div`
    margin-top: 60px;
  `;

  const List = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 56px;
  `;

  const Item = styled.li`
    display: flex;
    gap: 24px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  `;

  const Image = styled.img`
    width: 40%;
  `;

  const StoryTitle = styled.p`
    font-weight: bold;
    font-size: 20px;
  `;

  return (
    <>
      <Helmet>
        <title>会社について | 株式会社Reben</title>
        <meta
          name="description"
          content="株式会社Rebenについてのページです。"
        />
        <meta
          name="keywords"
          content="会社について, 株式会社Reben, 企業理念, 事業内容"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP */}
        <meta property="og:title" content="会社概要 | 株式会社Reben" />
        <meta
          property="og:description"
          content="株式会社Rebenについてのページです。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://あなたのサイトのURL/" />
        <meta
          property="og:image"
          content="https://あなたのサイトのURL/assets/images/ogp.jpg"
        />
        <meta property="og:site_name" content="株式会社Reben" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="会社概要 | 株式会社Reben" />
        <meta
          name="twitter:description"
          content="株式会社Rebenについてのページです。"
        />
        <meta
          name="twitter:image"
          content="https://あなたのサイトのURL/assets/images/ogp.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <PageHeading title="株式会社Rebenとは" type="about" />

      <ContentInner>
        <Text>
          私たちの会社名は、
          <Strong>「Relationship（信頼関係）」 と 「Leben（人生）」</Strong>
          を掛け合わせた造語です。
          <br />
          この名前には、「私たちが関わるすべての人との信頼関係を大切にし、その人の人生がより良いものとなるよう支えていきたい」という想いが込められています。
        </Text>

        <Box>
          <Title>企業理念</Title>
          <Centering>
            <SubTitle>「関わるすべての人を幸せに。」 </SubTitle>
          </Centering>
          <Text>
            社員一人ひとりに寄り添い、その人生をより豊かで充実したものにするために、私たちは存在します。
            そして、そのためにはまず私たち自身が幸せであることが大切だと考えています。
            <br />
            だからこそ、働く環境やチームのあり方にもこだわり、共に成長し、共に喜びを分かち合える会社を目指し、
            お客様、社員、パートナー企業――関わるすべての人が笑顔になれる未来を創るために、私たちはこれからも挑戦し続けます。
          </Text>

          <Text>
            <Centering>
              <SubTitle>【若い世代に力強い夢を】 </SubTitle>
            </Centering>
            私達は若い世代の夢を叶えるというミッションを持っています。
            この事業を通し人間力×営業力をつけ
            何にでも挑戦できる人財を輩出していきたいと考えています。
          </Text>
        </Box>

        <Box>
          <Title>会社の歴史・沿革</Title>
          <List>
            <Item>
              {/* <Image src={story1} alt="" /> */}
              <div>
                <StoryTitle>2019年3月1日 - 個人事業主として開業</StoryTitle>
                <p>
                  私たちの歩みは、2019年3月1日に個人事業主としてスタートしました。
                  少人数からの始まりでしたが、信頼関係を大切にしながら、着実に事業を成長させていきました。
                </p>
              </div>
            </Item>
            <Item>
              {/* <Image src={story2} alt="" /> */}
              <div>
                <StoryTitle>2019年10月1日 - 一人目の社員が入社</StoryTitle>
                <p>
                  2019年10月1日、一人目の社員が入社し、会社の成長を加速させることとなりました。
                  新しい仲間を迎え、共に夢を追い、目標を達成するために歩み始めました。
                </p>
              </div>
            </Item>
            <Item>
              {/* <Image src={story3} alt="" /> */}
              <div>
                <StoryTitle>2021年4月13日 - 株式会社Reben設立</StoryTitle>
                <p>
                  そして、2021年4月13日、私たちは法人化を果たし、
                  株式会社Rebenとして新たな一歩を踏み出しました。
                  これにより、より多くの挑戦を受け入れ、組織としての成長を加速させ、より強固な基盤を築いていきました。
                </p>
              </div>
            </Item>
          </List>
        </Box>
      </ContentInner>
      <Info />
    </>
  );
};
