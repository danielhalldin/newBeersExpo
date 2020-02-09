import React from "react";
import { Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { untappdUser } from "../../lib/queries";
import {
  Container,
  Left,
  User,
  AvatarContainer,
  Avatar,
  NameContainer,
  Name,
  Center,
  Logo,
  Right,
  Beers
} from "./styles";

export default function App() {
  const { loading, error, data } = useQuery(untappdUser);

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

  const { avatar, name, totalBeers } = data.untappdUser;
  return (
    <Container>
      <Left>
        <User>
          <AvatarContainer>
            <Avatar source={{ uri: avatar }} />
          </AvatarContainer>
          <NameContainer>
            <Name>{name}</Name>
          </NameContainer>
        </User>
      </Left>
      <Center>
        <Logo>NEW BEERS</Logo>
      </Center>
      <Right>
        <Beers>🍺 {totalBeers}</Beers>
      </Right>
    </Container>
  );
}
