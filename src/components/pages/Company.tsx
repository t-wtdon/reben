import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { SlideShow } from "../common/pages/Home/Slideshow";
import { breakpoints } from "../../styles/breakpoints";
import { Info } from "../common/pages/Home/Info";
import { Access } from "../common/pages/Home/Access";
import { PageHeading } from "../common/PageHeading";
import { ScrollToTop } from "../common/ScrollToTop";

export const Company = () => {
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

  return (
    <>
      <Helmet>
        <title>会社概要 | 株式会社Reben</title>
        <meta
          name="description"
          content="株式会社Rebenの会社概要をご紹介します。企業理念・所在地・代表挨拶など、株式会社Rebenの詳細情報をご覧ください。"
        />
        <meta
          name="keywords"
          content="会社概要, 株式会社Reben, 企業情報, 代表挨拶, 企業理念, 事業内容"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP */}
        <meta property="og:title" content="会社概要 | 株式会社Reben" />
        <meta
          property="og:description"
          content="株式会社Rebenの会社概要をご紹介します。企業理念・所在地・代表挨拶など、株式会社Rebenの詳細情報をご覧ください。"
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
          content="株式会社Rebenの会社概要をご紹介します。企業理念・所在地・代表挨拶など、株式会社Rebenの詳細情報をご覧ください。"
        />
        <meta
          name="twitter:image"
          content="https://あなたのサイトのURL/assets/images/ogp.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <PageHeading title="会社概要" type="company" />

      <Table>
        <Row>
          <Head>会社名</Head>
          <Data>株式会社Reben</Data>
        </Row>
        <Row>
          <Head>代表者</Head>
          <Data>山田太郎</Data>
        </Row>
        <Row>
          <Head>設立年月日</Head>
          <Data>2025/01/01</Data>
        </Row>
        <Row>
          <Head>所在地</Head>
          <Data>
            <SmallText>会社: </SmallText>神奈川県川崎市中原区上小田中3-13-13-3
            <br />
            <SmallText>げんき訪問看護ステーション: </SmallText>
            神奈川県川崎市中原区丸子町715-10
          </Data>
        </Row>
        <Row>
          <Head>事業内容</Head>
          <Data>訪問看護事業</Data>
        </Row>
        <Row>
          <Head>従業員数</Head>
          <Data>3人(スタッフ20人)</Data>
        </Row>
        <Row>
          <Head>連絡先</Head>
          <Data>
            <SmallText>メール: </SmallText>神奈川県川崎市中原区上小田中3-13-13-3
          </Data>
        </Row>
      </Table>

      <ContentInner>
        <Access />
      </ContentInner>
      <SlideShow />
      <Info />
    </>
  );
};
