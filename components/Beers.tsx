import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { untappdUserBeers } from "../lib/queries";
import untappdLogo from "../assets/pbu_80_yellow.png";

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
    return data.data.untappdUserBeers.slice(0, 6).map(beer => {
      return (
        <Card key={beer.id}>
          <Beer>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                flex: 0
              }}
            >
              {beer.salesStartDate || beer.checkinDate}
            </Text>
            <View style={{ flex: 7, backgroundColor: "white", padding: 5 }}>
              <View style={{ flex: 4 }}>
                <Text style={{ textAlign: "center" }}>{beer.name}</Text>
                <Label source={{ uri: beer.beerLabel }} />
                <Text style={{ textAlign: "center" }}>{beer.brewery}</Text>
              </View>
            </View>
            <Text style={{ color: "white", flex: 0 }}>{beer.abv}</Text>
          </Beer>
        </Card>
      );
    });
  };

  return (
    <Wrapper>
      <Beers data={data} />
    </Wrapper>
  );
}

const Card = styled.View`
  width: 40%;
  margin-top: 20px;
  height: 35%;
  background-color: #333;
  border-radius: 10px;
  padding: 5px;
`;

const Beer = styled.View`
  flex: 7;
  flex-direction: column;
`;

const Label = styled.Image`
  width: 75px;
  height: 75px;
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;
