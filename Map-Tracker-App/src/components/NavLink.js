import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate(props.routeName)}
    >
      <Spacer>
        <Text style={styles.link}>{props.text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
export default withNavigation(NavLink);
