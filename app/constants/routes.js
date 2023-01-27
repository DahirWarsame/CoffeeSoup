import { createStackNavigator } from '@react-navigation/native-stack';
import CoffeeTypesScreen from '../screens/CoffeeTypesScreen'
import CoffeeSizesScreen from '../screens/CoffeeSizesScreen'
import CoffeeExtrasScreen from '../screens/CoffeeExtrasScreen'
import ConfirmationScreen from '../screens/ConfirmationScreen'
const screens = {
  CoffeeTypes: {
    screen: CoffeeTypesScreen
  },
  SelectSize: {
    screen: CoffeeSizesScreen
  },
  SelectExtra: {
    screen: CoffeeExtrasScreen
  },
  Confirmation: {
    screen: ConfirmationScreen
  },
  ThankYou: {
    screen: ConfirmationScreen
  }
};

const options = {
  initialRouteName: 'CoffeeTypes',
  defaultNavigationOptions: {
    title: 'Coffee Machine'
  }
};

export const CoffeeStack = createStackNavigator(screens, options);