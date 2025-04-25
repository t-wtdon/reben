import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../../../styles/breakpoints";

const mv = require("../../../../assets/images/home/mv.jpg");

// 四角のふわふわアニメーション
const float = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(5px, -5px); }
  100% { transform: translate(0, 0); }
`;

const MainVisualWrap = styled.div`
  position: relative;
  display: flex;
  background: #0b3c5d;
  height: calc(100vh - 70px);
  overflow: hidden;
`;

const MainVisual = styled.div<{ mvImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: calc(100vh - 130px);
  margin: 0 auto;
  background: center center no-repeat url(${(props) => props.mvImage});
  background-size: cover;
  z-index: 1;
`;

const Box = styled.div`
  position: absolute;
  top: 40%;
  left: 15%;
  z-index: 3;

  @media (max-width: ${breakpoints.tablet}) {
    left: 10%;
  }
`;

const WhiteBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: calc(100vh - 70px);
  background: #fff;
  z-index: 1;
`;

const Title = styled.h3`
  display: inline-block;
  background: #0b3c5d;
  color: #fff;
  margin: 8px 0;
  font-size: 42px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 36px;
  }
`;

const SquareContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const SquareContainerFront = styled(SquareContainer)`
  z-index: 2;
`;

const FloatingSquare = styled.div<{ size: number }>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: rgba(255, 255, 255, 0.3);
  animation: ${float} 0.3s ease-in-out infinite alternate;
  border-radius: 2px;
`;

export const Mv = () => {
  const squares = useMemo(() => {
    return Array.from({ length: 50 }, (_, index) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${5 + Math.random() * 5}s`,
      delay: `${Math.random() * 5}s`,
      size: index < 25 ? 15 : 25, // 最初の25個を10pxに、残りを20pxに設定
    }));
  }, []);

  return (
    <MainVisualWrap>
      {/* 背景にふわふわ */}
      <SquareContainer>
        {squares.map((square, index) => (
          <FloatingSquare
            key={`bg-${index}`}
            size={square.size} // 四角のサイズを適用
            style={{
              top: square.top,
              left: square.left,
              animationDuration: square.duration,
              animationDelay: square.delay,
            }}
          />
        ))}
      </SquareContainer>

      {/* 画像の前にもふわふわ */}
      <SquareContainerFront>
        {squares.map((square, index) => (
          <FloatingSquare
            key={`fg-${index}`}
            size={square.size} // 四角のサイズを適用
            style={{
              top: square.top,
              left: square.left,
              animationDuration: square.duration,
              animationDelay: square.delay,
            }}
          />
        ))}
      </SquareContainerFront>

      <WhiteBox />

      <Box>
        <Title>関わる</Title>
        <br />
        <Title>全ての人を幸せに。</Title>
      </Box>

      <MainVisual mvImage={mv} />
    </MainVisualWrap>
  );
};
