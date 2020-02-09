import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import graphqlClient from "./lib/graphqlClient";
import Layout from "./components/Layout";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "BowlbyOne-Regular": require("./assets/fonts/BowlbyOne-Regular.ttf"),
    "Hind-Bold": require("./assets/fonts/Hind-Bold.ttf"),
    "Hind-Light": require("./assets/fonts/Hind-Light.ttf"),
    "Hind-Medium": require("./assets/fonts/Hind-Medium.ttf"),
    "Hind-Regular": require("./assets/fonts/Hind-Regular.ttf"),
    "Hind-SemiBold": require("./assets/fonts/Hind-SemiBold.ttf")
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
  return (
    <ApolloProvider client={graphqlClient}>
      <Layout />
    </ApolloProvider>
  );
}
