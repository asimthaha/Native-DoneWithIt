import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.backgorund}
      source={require("../assets/screen.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text style={{ color: colors.white }}>Sell what you dont need</Text>
      </View>
      <View style={styles.loginButton}>
        <Button title="LOGIN" color={colors.primary} />
      </View>
      <View style={styles.registerButton}>
        <Button title="REGISTER" color={colors.secondary} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgorund: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "70%",
    height: 40,
    backgroundColor: "brown",
    marginBottom: 2,
  },
  registerButton: {
    width: "70%",
    height: 35,
    backgroundColor: colors.white,
  },
});
