import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)<{ marginTop?: number }>`
  display: block;
  margin: ${(props) => (props.marginTop ? props.marginTop : "0")}px auto 0;
  max-width: 300px;
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 16px;
  background: #fff;
  border: 1px solid #333;
  cursor: pointer !important;

  &:link,
  &:visited {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export const MoreButton = ({
  text,
  link,
  marginTop,
}: {
  text: string;
  link: string;
  marginTop?: number;
}) => {
  return (
    <Button to={link} marginTop={marginTop}>
      {text}
    </Button>
  );
};
