import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {paramsInterface} from '../../interfaces/app_interfaces';

const SideBar: React.FC<paramsInterface> = ({navigation, updateRoute}) => {
  const menuItems = [
    {label: 'Plan 1', route: 'plan1'},
    {label: 'Plan 2', route: 'plan2'},
    {label: 'Plan R+3', route: 'planR3'},
    {label: 'Plan R+4', route: 'planR4'},
  ];

  return (
    <ScrollView style={styles.sidebar}>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>Liste plan</Text>
      </View>
      {menuItems.map(item => {
        return (
          <TouchableOpacity
            key={item.route}
            style={styles.menuItem}
            onPress={() => updateRoute(item.route)}>
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 20,
  },
  headerTitle: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SideBar;
