import styled from "styled-components";
export const Card = styled.View`
  width: 40%;
  margin-top: 20px;
  height: 35%;
  background-color: #333;
  border-radius: 10px;
  padding: 5px;
`;

export const Beer = styled.View`
  flex: 7;
  flex-direction: column;
`;

export const Label = styled.Image`
  width: 75px;
  height: 75px;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;
