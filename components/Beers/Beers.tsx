import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { untappdUserBeers } from "../../lib/queries";
import Card from "../Card";
import { Wrapper } from "./styles";

export default function App() {
  const { loading, error, data } = useQuery(untappdUserBeers);

  if (loading) {
    return (
      <View>
        <Text>🍺 Laddar...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error :(</Text>
      </View>
    );
  }
  console.log({ data });

  const Beers = data => {
    return data.data.untappdUserBeers.slice(12, 20).map(beer => {
      return (
        <Card
          rotate={Math.round(
            Math.random() < 0.5 ? -3 * Math.random() : 3 * Math.random()
          )}
          data={beer}
          key={beer.id}
        />
      );
    });
  };

  return (
    <Wrapper>
      <Beers data={data} />
    </Wrapper>
  );
}
