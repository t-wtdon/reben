import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { Info } from "../common/Info";
import { Access } from "../common/pages/Home/Access";
import { PageHeading } from "../common/PageHeading";
import { ScrollToTop } from "../common/ScrollToTop";

const ceo = require("../../assets/images/company/ceo.jpg");

export const Company = () => {
  const Container = styled.section`
    padding-top: 70px; // header分余白を取ってる

    @media (max-width: ${breakpoints.sp}) {
      padding-top: 56px;
    }
  `;

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

  const Table = styled.table`
    display: block;
    width: 100%;
    max-width: 1080px;
    padding: 0 15px;
    margin: 0 auto;
    border-collapse: collapse;
  `;

  const Row = styled.tr`
    display: block;
    border-top: 1px solid #dae0e0;

    &:last-child {
      border-bottom: 1px solid #dae0e0;
    }
  `;
  const Head = styled.th`
    padding: 12px;
    width: 130px;
    background: #f7f7f7;

    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
    }
  `;
  const Data = styled.td`
    padding: 12px;
    letter-spacing: 0.06em;

    @media (max-width: ${breakpoints.sp}) {
      font-size: 14px;
    }
  `;

  const SmallText = styled.span`
    font-weight: bold;
  `;

  const Box = styled.div`
    display: flex;
    align-items: start;
    gap: 24px;
    margin: 40px auto;
    padding: 0 15px;
    max-width: 1080px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.tablet}) {
      flex-wrap: wrap;
    }
  `;

  const Image = styled.img`
    width: 50%;
    max-width: 500px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  `;

  const Contents = styled.div`
    width: calc(50% - 12px);

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  `;

  const Position = styled.p`
    margin: 0 0 24px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.06em;

    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 0;
      text-align: center;
    }
  `;

  const Name = styled.span`
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
  `;

  const Text = styled.p`
    font-size: 16px;
    line-height: 1.6;
  `;

  const BigTitle = styled.span`
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: bold;
  `;

  return (
    <Container>
      <Helmet>
        <title>会社概要・代表メッセージ | 株式会社Reben</title>

        <meta
          name="description"
          content="株式会社nJOYの会社概要・代表メッセージをご紹介。企業理念や事業内容、訪問看護・介護サービスの想いについて詳しくご覧いただけます。"
        />
        <meta
          name="keywords"
          content="会社概要, 企業情報, 代表メッセージ, 企業理念, 事業内容, 訪問看護, 在宅介護, 株式会社nJOY"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP (Open Graph Protocol) */}
        <meta
          property="og:title"
          content="会社概要・代表メッセージ | 株式会社nJOY"
        />
        <meta
          property="og:description"
          content="株式会社nJOYの会社概要・代表メッセージをご紹介。企業理念や事業内容、訪問看護・介護サービスの想いについて詳しくご覧いただけます。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://n-joy.jp/company" />
        <meta
          property="og:image"
          content="https://n-joy.jp/assets/images/ogp.jpg"
        />
        <meta property="og:site_name" content="株式会社nJOY" />

        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="会社概要・代表メッセージ | 株式会社nJOY"
        />
        <meta
          name="twitter:description"
          content="株式会社nJOYの会社概要・代表メッセージをご紹介。企業理念や事業内容、訪問看護・介護サービスの想いについて詳しくご覧いただけます。"
        />
        <meta
          name="twitter:image"
          content="https://n-joy.jp/assets/images/ogp.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <PageHeading title="会社概要" type="company" />

      <Box>
        <Image src={ceo} alt="" />
        <Contents>
          <Position>
            代表取締役
            <Name>堀込勇樹</Name>
          </Position>
          <Text>
            はじめまして。株式会社Rebenの堀込勇樹です。
            <br />
            はじめまして。私たちは、「人と人とのつながり」を何より大切にしてきました。
            どんな仕事も、どんな現場も、支えるのは“人”です。
            私たちは、関わるすべての人にとってあたたかく、信頼できる存在でありたい。
            そんな想いを胸に、これからも一歩ずつ、誠実に歩んでまいります。
          </Text>
        </Contents>
      </Box>

      <Box>
        <Text>
          <BigTitle>代表者略歴</BigTitle>
          • 2001年 東京大学経済学部卒業、学年首席で卒業
          <br />
          • 2002年
          ゴールドマン・サックス証券に新卒入社、半年で最年少で課長に昇進
          <br />
          • 2004年
          イギリス・ロンドンの投資銀行に転職し、3年連続で最優秀アナリストに選出
          <br />
          • 2012年
          世界のテクノロジー業界で最も影響力のある人物に選出され、フォーブス誌に特集記事掲載
          <br />
          • 2020年
          世界的に有名な社会貢献活動を行い、ノーベル平和賞の候補にノミネートされる
          <br />• 2024年
          現在、次世代リーダー育成と社会的責任をテーマにした教育プログラムを展開中
        </Text>
      </Box>

      <Table>
        <Row>
          <Head>会社名</Head>
          <Data>株式会社Reben</Data>
        </Row>
        <Row>
          <Head>取締役</Head>
          <Data>堀込勇樹</Data>
        </Row>
        <Row>
          <Head>設立年月日</Head>
          <Data>令和6年12月16日</Data>
        </Row>
        <Row>
          <Head>事業内容</Head>
          <Data>サービス業</Data>
        </Row>
        <Row>
          <Head>従業員数</Head>
          <Data>9000人</Data>
        </Row>
      </Table>

      <ContentInner>{/* <Access /> */}</ContentInner>
      <Info />
    </Container>
  );
};
