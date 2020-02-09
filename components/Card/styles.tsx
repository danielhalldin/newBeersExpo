import styled from "styled-components";

export const Card = styled.View`
  width: 40%;
  margin-top: 20px;
  height: 35%;
  background-color: #333;
  border-radius: 10px;
  padding: 5px;
  transform: ${props => "rotate(" + props.rotate + "deg)"};
`;
