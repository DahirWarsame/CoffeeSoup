import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import useCoffeeMachine from '../hooks/useCoffeeMachine';
import ItemContainer from '../components/ItemComponent';

function CoffeeTypesScreen({ navigation }) {
	const { coffeeTypes } = useCoffeeMachine();
	const [selectedType, setSelectedType] = useState();

	const handleSelectType = (type) => {
		setSelectedType(type);
		navigation.navigate('SelectSize', { type });
	};

	return (
		<View>
			<FlatList
				data={coffeeTypes}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					<ItemContainer
						title={item.name}
						onPress={() => handleSelectType(item)}
					/>
				)}
			/>
		</View>
	);
}
export default CoffeeTypesScreen;
