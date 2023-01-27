import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

function WelcomeScreen(props) {
	return (
		<View style={styles.container}>
			<Image
				source={require('../assets/nfc-action.png')}
				style={styles.background}
			></Image>
			<Text style={styles.welcomeText}>Welcome to our app!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
	},
	container: {
	},
	welcomeText: {
	},
});

export default WelcomeScreen;
