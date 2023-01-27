import 'react-native-gesture-handler';
import { React, useCallback, useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import CoffeeTypesScreen from './app/screens/CoffeeTypesScreen';
import CoffeeSizesScreen from './app/screens/CoffeeSizesScreen';
import CoffeeExtrasScreen from './app/screens/CoffeeExtrasScreen';
import ConfirmationScreen from './app/screens/ConfirmationScreen';
import color from './app/constants/colors';
import Text from './app/components/Text';


// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

//Navigation stack
const Stack = createNativeStackNavigator();

//Main App
function App() {
	//Define fontsLoaded state and setter
	const [fontsLoaded, setFontsLoaded] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Avenir-Next': require('./app/assets/fonts/AvenirNextLTPro-Regular.otf'),
        });
      } catch (e) {
        console.warn(e);
        console.warn('Here');
      } finally {
        // Tell the application to render
        setFontsLoaded(true);
        setAppIsReady(true);
      }
    }
    
    prepare();
  }, []);
  
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      console.warn(appIsReady);
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }





	//Main Screens and titles
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="CoffeeTypes"
				screenOptions={{
					headerStyle: {
						backgroundColor: color.primary,
					},
				}}
			>
				<Stack.Screen
					name="CoffeeTypes"
					component={CoffeeTypesScreen}
					options={{
						headerTitle: () => (
							<Text style={styles.titleText}>
								Select your style
							</Text>
						),
					}}
				/>
				<Stack.Screen
					name="SelectSize"
					component={CoffeeSizesScreen}
					options={{
						headerTitle: () => (
							<Text style={styles.titleText}>
								Select your size
							</Text>
						),
					}}
				/>
				<Stack.Screen
					name="SelectExtra"
					component={CoffeeExtrasScreen}
					options={{
						headerTitle: () => (
							<Text style={styles.titleText}>
								Select your extra's
							</Text>
						),
					}}
				/>
				<Stack.Screen
					name="Confirmation"
					component={ConfirmationScreen}
					options={{
						headerTitle: () => (
							<Text style={styles.titleText}>Confirmation</Text>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 20,
		color: '#000',
	},
});

export default App;
