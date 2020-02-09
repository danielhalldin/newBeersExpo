import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { untappdUser } from "../lib/queries";

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
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.user}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.logo}>NEW BEERS</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.beers}>🍺 {totalBeers}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 35
  },
  left: {
    flex: 6,
    justifyContent: "center"
  },
  center: {
    flex: 9,
    justifyContent: "center"
  },
  right: {
    flex: 6,
    justifyContent: "center"
  },
  user: {
    flex: 1,
    flexDirection: "row"
  },
  avatarContainer: {
    justifyContent: "center",
    marginLeft: 5
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowRadius: 100,
    shadowOpacity: 0
  },
  nameContainer: {
    justifyContent: "center",
    marginLeft: 5
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Hind-Bold",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 10
  },
  logo: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "BowlbyOne-Regular",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 5
  },
  beers: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Hind-Bold",
    color: "#fff",
    textAlign: "right",
    marginRight: 10,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 10
  }
});
