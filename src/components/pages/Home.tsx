import React from "react";
import { Helmet } from "react-helmet-async";
import { Mv } from "../common/pages/Home/Mv";
import { About } from "../common/pages/Home/About";
import { Business } from "../common/pages/Home/Business";
import { Access } from "../common/pages/Home/Access";
import { Info } from "../common/Info";
import { Point } from "../common/pages/Home/Point";
import { Career } from "../common/pages/Home/Career";
import { ScrollToTop } from "../common/ScrollToTop";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>【公式】株式会社Reben | 株式会社Reben</title>
        <meta
          name="description"
          content="株式会社Rebenは、訪問介護・福祉サービスを提供する企業です。安心と信頼の介護をお届けします。"
        />
        <meta
          name="keywords"
          content="訪問介護, 介護サービス, 福祉, 株式会社Reben, 介護施設, 介護支援"
        />
        <meta name="robots" content="index, follow" />

        {/* OGP */}
        <meta
          property="og:title"
          content="【公式】株式会社Reben | 株式会社Reben"
        />
        <meta
          property="og:description"
          content="株式会社Rebenは、訪問介護・福祉サービスを提供する企業です。安心と信頼の介護をお届けします。"
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
        <meta
          name="twitter:title"
          content="【公式】株式会社Reben | 株式会社Reben"
        />
        <meta
          name="twitter:description"
          content="株式会社Rebenは、訪問介護・福祉サービスを提供する企業です。安心と信頼の介護をお届けします。"
        />
        <meta
          name="twitter:image"
          content="https://あなたのサイトのURL/assets/images/ogp.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <Mv />
      <About />
      <Business />
      <Point />
      <Career />
      <Access />
      <Info />
    </>
  );
};
