import React from "react";
import { Card } from "./styles";
import Beer from "../Beer";

const CardComponent = ({ data, rotate }) => {
  return (
    <Card rotate={rotate}>
      <Beer data={data} />
    </Card>
  );
};

export default CardComponent;
