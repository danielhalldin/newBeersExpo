import React from "react";
import { View, Text, ImageBackground } from "react-native";
import backgroundImage from "../../assets/beer-background.jpg";
import Name from "./Name";
import Image from "./Image";
import { Beer, Header } from "./styles";

const BeerComponent = ({ data }) => {
  return (
    <Beer>
      <Header>{data.salesStartDate || data.checkinDate}</Header>
      <View style={{ flex: 7 }}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ flex: 4, padding: 0 }}>
            <Name name={data.name} />
            <Image src={data.beerLabel} />
            <Text style={{ textAlign: "center" }}>{data.brewery}</Text>
          </View>
        </ImageBackground>
      </View>
      <Text style={{ color: "white", flex: 0 }}>{data.abv}</Text>
    </Beer>
  );
};

export default BeerComponent;
