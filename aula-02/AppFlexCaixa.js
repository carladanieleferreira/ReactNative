import { View, Text, StyleSheet, LogBox } from "react-native";
import React from "react";

export default function App() {
  return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>Voltar</Text>
          <Text>Home</Text>
          <Text>Detalhes</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  box: {
    backgroundColor: '#8f8f8f',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    fontSize: 30,
    paddingVertical: 15,
    paddingHorizontal: 15
  }
});