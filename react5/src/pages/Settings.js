import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ isEnabled, toggleSwitch }) => {
  const theme = isEnabled ? darkTheme : lightTheme;
  
  const menuItems = [
    { title: 'Language', icon: 'chevron-forward' },
    { title: 'My Profile', icon: 'chevron-forward' },
    { title: 'Contact Us', icon: 'chevron-forward' },
    { title: 'Change Password', icon: 'chevron-forward' },
    { title: 'Privacy Policy', icon: 'chevron-forward' },
  ];
  return (
    <View style={[styles.container, theme.container]}>
      <View style={styles.heading}>
        <Text style={[styles.title, theme.text]}>Settings</Text>
      </View>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={index} style={[styles.menuItem, theme.menuItem]}>
          <Text style={[styles.menuText, theme.text]}>{item.title}</Text>
          <Icon name={item.icon} size={20} color={theme.iconColor} />
        </TouchableOpacity>
      ))}
      <View style={styles.theme}>
        <Text style={[styles.themeText, theme.text]}>Theme</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#04b919' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#a1a1a5"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
  menuItem: {
    borderBottomColor: '#ddd',
  },
  iconColor: '#7c7c7e',
});
const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#161622',
  },
  text: {
    color: '#fff',
  },
  menuItem: {
    borderBottomColor: '#333',
  },
  iconColor: '#bbb',
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    paddingTop: 70,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingTop: 20,
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 17,
  },
  theme: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  themeText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
export default SettingsScreen;