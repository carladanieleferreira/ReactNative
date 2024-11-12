import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
  <View style={styles.container}>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
    <View style={styles.box}></View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  box: {
    flex:1,
    height: 100,
    backgroundColor: "#9d9d9d",
    margin: 10,
  },
});
