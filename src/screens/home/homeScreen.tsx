import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {navigationType} from '../../../interfaces/app_interfaces';
import SideBar from '../../navigation/sidebar';
import Plan1 from '../plans/plan1';
import Plan2 from '../plans/plan2';
import PlanR3 from '../plans/planR3';
import PlanR4 from '../plans/planR4';

export default function HomeScreen({navigation}: navigationType) {
  const [parentName, setParentName] = useState<string>('Mr John Obi');

  const [route, setRoute] = useState<string>('plan1');

  const updateName = (name: string): void => {
    setParentName(name);
    setRoute(name);
    // navigation.navigate(name);
  };
  return (
    <View style={styles.container}>
      <SideBar navigation={navigation} updateRoute={updateName} />
      <View style={styles.content}>
        <Text style={styles.heading}>Home Screen</Text>
        {route === 'plan1' && <Plan1 />}
        {route === 'plan2' && <Plan2 />}
        {route === 'planR3' && <PlanR3 />}
        {route === 'planR4' && <PlanR4 />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 3,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
  },
});
