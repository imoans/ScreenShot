import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "./Text";

export default function App({ text }) {
  return (
    <View style={styles.container}>
      <Text text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
