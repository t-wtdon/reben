import React from "react";
import styled from "styled-components";

const HeadArea = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const HeadingContent = styled.h2<{ color?: string }>`
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 4px;
  border-bottom: 4px solid #4fc3f7;
  margin: 0;
  color: ${(props) => props.color};
`;

export const Heading = ({
  title,
  color,
}: {
  title: string;
  color?: string;
}) => {
  return (
    <HeadArea>
      <HeadingContent color={color}>{title}</HeadingContent>
    </HeadArea>
  );
};
