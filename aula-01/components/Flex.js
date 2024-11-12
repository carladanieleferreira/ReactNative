import { View, Text, StyleSheet } from "react-native";

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "yellow", width: 50, height: 40 }}>
        <Text>Oi</Text>
        <Text>Oi</Text>
        
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  }
})
