import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{props.headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      {props.errorMessage ? (
        <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={props.submitButtonText}
          onPress={() => props.onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
});

export default AuthForm;
