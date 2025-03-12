import React from "react";
import styled from "styled-components";
import { Heading } from "../../Heading";
import { breakpoints } from "../../../../styles/breakpoints";

const Container = styled.div`
  padding: 60px 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 0;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  width: calc(50% - 10px);
  background: #03a9f4;
  color: #f0f8ff;
  border-radius: 8px;
  padding: 12px;
  box-sizing: border-box;

  &:nth-child(1),
  &:nth-child(4) {
    background: #4caf50;
  }

  @media (max-width: ${breakpoints.sp}) {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: right;
  margin: 0;
`;

export const Recruit = () => {
  return (
    <Container>
      <Heading title="社員の声" />

      <List>
        <Item>
          <Title>未経験からでも安心して成長できる環境！</Title>
          <p>
            最初は不安でしたが、先輩が丁寧に教えてくれたので安心してスタートできました。
            研修制度も充実していて、知識ゼロからでもしっかり成長できます！
          </p>
          <Name>販売スタッフ（入社1年目）</Name>
        </Item>
        <Item>
          <Title>頑張りを評価してくれるからやりがいがある！</Title>
          <p>
            成果をしっかり評価してくれる会社なので、モチベーションが上がります。
            実際、私はイベントスタッフからリーダーになり、今は運営企画にも関わるようになりました！
          </p>
          <Name>イベント運営スタッフ（入社3年目）</Name>
        </Item>
        <Item>
          <Title>安定したキャリアを築ける職場！</Title>
          <p>
            この仕事は接客のスキルだけでなく、チームマネジメントや売上管理のスキルも身につきます。
            お客様の笑顔を直接見られるのがやりがいですね！
          </p>
          <Name>通信キャリアショップ店長（入社5年目）</Name>
        </Item>
        <Item>
          <Title>チームワークを大切にできる環境！</Title>
          <p>
            個人の頑張りも大事ですが、チームで協力して成果を出すのがこの仕事の醍醐味です。
            困ったときはすぐに相談できる環境があり、仲間と一緒に成長できるのが嬉しいですね！
          </p>
          <Name>家電量販店スタッフ（入社2年目）</Name>
        </Item>
      </List>
    </Container>
  );
};
