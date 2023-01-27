import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FancyButton from '../components/FancyButton';
import Text from '../components/Text';

function ConfirmationScreen({ navigation, route }) {
	const { type, size, extras } = route.params;

	const handlePlaceOrder = () => {
		// Place order using the selected type, size, and extras
		const coffee = {
			type: type.name,
			size: size.name,
			extras: extras.map((extra) => extra.name),
		};
		console.log('Your order: ', coffee);
		//navigate to the final screen
	};

	return (
		<View style={{backgroundColor:'#b8b8b8'}}>
			<Text>Type: {type.name}</Text>
			<Text>Size: {size.name}</Text>
			<Text>Extras: {extras.map((extra) => extra.name).join(', ')}</Text>

			<FancyButton title="Place Order" onPress={handlePlaceOrder} />
		</View>
	);
}
export default ConfirmationScreen;
