import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = (props) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => props.navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
