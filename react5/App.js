import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Buttons from './components/Welcome';


export default function App() {
  return (
    <View style={styles.container}>
      <Welcome/>
      {/* <Buttons/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  
});
