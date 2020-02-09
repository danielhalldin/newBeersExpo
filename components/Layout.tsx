import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import backgroundImage from "../assets/oak.jpg";
import Header from "./Header";
import Beers from "./Beers";
import Footer from "./Footer";

export default function App() {
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="repeat"
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={{ flex: 8 }}>
          <Beers />
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10
  },
  header: {
    flex: 1,
    backgroundColor: "#333"
  },
  footer: {
    flex: 0.7,
    backgroundColor: "#333"
  }
});
