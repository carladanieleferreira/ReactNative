
import { StatusBar, Text, View } from 'react-native';
import Exemplo from './components/Exemplo';
import Flex from './components/Flex';

export default function App() {
  return (
    <View>
       <StatusBar/>
      {/* <Text style = {{color:'red',fontSize:70}}>Hello World !!</Text>
      <Exemplo/> */}
      <Flex/>
     
    </View>
  );r
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
