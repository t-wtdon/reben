import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { Info } from "../common/pages/Home/Info";
import { PageHeading } from "../common/PageHeading";
import { ScrollToTop } from "../common/ScrollToTop";

const story1 = require("../../assets/images/about/story1.jpg");

export const Recruit = () => {
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
      <PageHeading title="採用情報" type="recruit" />

      <ContentInner>ここは採用ページ</ContentInner>
      <Info />
    </>
  );
};
