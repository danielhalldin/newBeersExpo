import React from "react";
import styled from "styled-components";

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Image = styled.Image`
  background-color: white;
  width: 100px;
  height: 100px;
  border: 5px !important;
  border-color: white !important;
  border-radius: 5px !important;
`;

const ImageComponent = ({ src }) => {
  return (
    <ImageContainer>
      <Image source={{ uri: src }} />
    </ImageContainer>
  );
};

export default ImageComponent;
