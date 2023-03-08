import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/app_types';
import HomeScreen from '../screens/home/homeScreen';
import Plan1 from '../screens/plans/plan1';
import Plan2 from '../screens/plans/plan2';
import PlanR3 from '../screens/plans/planR3';
import PlanR4 from '../screens/plans/planR4';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={HomeScreen} />

        <Stack.Screen name="plan1" component={Plan1} />
        <Stack.Screen name="plan2" component={Plan2} />
        <Stack.Screen name="planR3" component={PlanR3} />
        <Stack.Screen name="planR4" component={PlanR4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
