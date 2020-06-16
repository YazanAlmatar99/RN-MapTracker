import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin } = useContext(Context);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to Your Account"
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => signin({ email, password })}
        errorMessage={state.errorMessage}
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};
SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
export default SigninScreen;
