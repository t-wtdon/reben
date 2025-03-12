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

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const H3heading = styled.h3`
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  width: calc((100% - 72px) / 4);

  @media (max-width: ${breakpoints.tablet}) {
    width: calc(50% - 12px);
  }

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
  }
`;

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #daeff2;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #00d2f2;
  font-size: 48px;
`;

const Text = styled.p`
  line-height: 1.7;
  margin-bottom: 0;
`;

export const Features = () => {
  return (
    <Container>
      <Heading title="事業内容" />

      <List>
        <Item>
          <IconBlock>
            <IconArea>
              <Icon icon={faBriefcase} />
            </IconArea>
          </IconBlock>
          <H3heading>業務委託請負</H3heading>
          <Text>
            企業のニーズに合わせた最適な人材を提供し、業務の効率化と成果の最大化を実現します。
            販売促進・接客業務・イベント運営など、多様な業務をプロフェッショナルスタッフが請け負い、
            貴社のビジネスを強力にサポートします。
          </Text>
        </Item>
        <Item>
          <IconBlock>
            <IconArea>
              <Icon icon={faBullhorn} />
            </IconArea>
          </IconBlock>
          <H3heading>イベント運営スタッフ</H3heading>
          <Text>
            ショッピングモールや商業施設での販売促進イベント、キャンペーン運営をサポートします。
            経験豊富なスタッフが、企画から運営まで一貫して対応し、
            来場者に魅力的な体験を提供することで、集客や販売促進につなげます。
          </Text>
        </Item>
        <Item>
          <IconBlock>
            <IconArea>
              <Icon icon={faTv} />
            </IconArea>
          </IconBlock>
          <H3heading>家電量販店スタッフ</H3heading>
          <Text>
            家電量販店にて、スマートフォンやインターネット回線などの販売サポートを行います。
            商品知識や接客スキルに優れたスタッフが、お客様一人ひとりに最適な商品・プランをご提案し、売上向上に貢献します。
          </Text>
        </Item>
        <Item>
          <IconBlock>
            <IconArea>
              <Icon icon={faMobileAlt} />
            </IconArea>
          </IconBlock>
          <H3heading>通信キャリアショップスタッフ</H3heading>
          <Text>
            大手通信キャリアのショップスタッフとして、接客・販売・契約業務を担当します。
            最新のスマートフォン・プランに関するご案内やアフターサポートを通じて、お客様満足度の向上を目指します。
          </Text>
        </Item>
      </List>
    </Container>
  );
};
