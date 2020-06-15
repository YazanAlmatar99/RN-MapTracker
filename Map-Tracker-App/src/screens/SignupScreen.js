import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = (props) => {
  return (
    <>
      <Text>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => props.navigation.navigate("Signin")}
      />
      <Button
        title="Go to main flow"
        onPress={() => props.navigation.navigate("mainFlow")}
      />
    </>
  );
};

const styles = StyleSheet.create({});
export default SignupScreen;
