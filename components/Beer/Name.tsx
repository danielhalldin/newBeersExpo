import React from "react";
import styled from "styled-components";

export const Name = styled.Text`
  margin: 5px 5px 0 5px;
  padding-top: 5px;
  color: black;
  text-align: center;
  font-family: "Hind-Bold";
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  line-height: ${props => {
    if (props.length > 30) {
      return "17px";
    } else if (props.length > 25) {
      return "18px";
    } else if (props.length > 20) {
      return "18px";
    } else if (props.length > 15) {
      return "19px";
    }
    return "21px";
  }};
  font-size: ${props => {
    if (props.length > 30) {
      return "15px";
    } else if (props.length > 25) {
      return "16px";
    } else if (props.length > 20) {
      return "18px";
    } else if (props.length > 15) {
      return "19px";
    }
    return "20px";
  }};
`;

const truncateText = (text, limit) => {
  if (!text) {
    return "";
  }
  if (text.length < limit) {
    return text;
  }
  text = text.slice(0, limit).split(" ");
  text.pop();
  return text.join(" ") + "…";
};

const NameComponent = ({ name }) => {
  const _name = truncateText(name, 40);
  return <Name length={_name.length}>{_name}</Name>;
};

export default NameComponent;
