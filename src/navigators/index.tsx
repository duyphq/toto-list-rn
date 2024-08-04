import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import Home from '../screen/home';
import {ROUTE_KEY} from '../constant/constant';
import DetailTask from '../screen/detal-task';

export type RootStackParams = {
  Splash: undefined;
  Home: undefined;
};

export type RootStack = keyof RootStackParams;

export type RootStackProps<T extends RootStack> = StackScreenProps<
  RootStackParams,
  T
>;

export type UseRootStackNavigation<T extends RootStack = 'Splash'> =
  StackNavigationProp<RootStackParams, T>;

const Stack = createStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTE_KEY.Home} component={Home} />
      <Stack.Screen name={ROUTE_KEY.DetailTask} component={DetailTask} />
    </Stack.Navigator>
  );
};

export default RootStack;
