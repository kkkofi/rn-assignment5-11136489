import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './src/pages/Home';
import { MyCardsScreen } from './src/pages/MyCards';
import SettingsScreen from './src/pages/Settings';
import { StatisticsScreen } from './src/pages/Statistics';


const Tab = createBottomTabNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(previousState => !previousState);
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'My Cards':
                iconName = focused ? 'card' : 'card-outline';
                break;
              case 'Statistics':
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                iconName = 'circle';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: isDarkTheme ? '#055ee7' : 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#27273a' : '#fff', 
          },
        })}
      >
        <Tab.Screen name="Home">
          {() => <HomeScreen isDarkTheme={isDarkTheme}/>}
        </Tab.Screen>
        <Tab.Screen name="My Cards">
          {() => <MyCardsScreen isDarkTheme={isDarkTheme}/>}
        </Tab.Screen>
        <Tab.Screen name="Statistics">
          {() => <StatisticsScreen isDarkTheme={isDarkTheme}/>}
        </Tab.Screen>
        <Tab.Screen name="Settings">
          {() => <SettingsScreen isEnabled={isDarkTheme} toggleSwitch={toggleTheme} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;