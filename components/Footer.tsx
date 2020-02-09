import React from "react";
import { Image, StyleSheet, View } from "react-native";
import untappdLogo from "../assets/pbu_80_yellow.png";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        marginTop: -5
      }}
    >
      <Image
        source={untappdLogo}
        resizeMode="contain"
        style={{ width: "50%", height: "50%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
