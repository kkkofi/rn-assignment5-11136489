import { StyleSheet, View } from 'react-native';
import { Homeheader } from '../component/Homeheader';

export const HomeScreen = ({isDarkTheme}) => {
  return (
    <View style={styles.container}>
      <Homeheader isDarkTheme={isDarkTheme}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
