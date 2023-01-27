import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ItemContainer from '../components/ItemComponent';
import SvgLungoLarge from '../components/SvgLungoLarge';
import SvgLungoMedium from '../components/SvgLungoMedium';
import SvgLungoSmall from '../components/SvgLungoSmall';
import useCoffeeMachine from '../hooks/useCoffeeMachine';
import Text from '../components/Text';
function CoffeeSizesScreen({ navigation, route }) {
	const { sizes } = useCoffeeMachine();
	const { type } = route.params;
	const [selectedSize, setSelectedSize] = useState();

	const handleSelectSize = (size) => {
		setSelectedSize(size);
		navigation.navigate('SelectExtra', { type, size });
	};

	const filteredSizes = sizes.filter((size) => type.sizes.includes(size._id));

	return (
		<View>
			<FlatList
				data={filteredSizes}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => (
					// <ItemContainer
					// 	title={item.name}
					// 	onPress={() => handleSelectSize(item)}
					// >
					//
					//
					//
					//   <SvgLungoSmall />
					// </ItemContainer>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							paddingLeft: 24,
							margin: 8,
              marginTop:2,
							gap: 20,
							backgroundColor: '#AED7A0',
							boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.15)',
							borderRadius: 4,
							color: '#FFFFFF',
						}}
						onPress={() => handleSelectSize(item)}
					>
						{item.name === 'Tall' && <SvgLungoSmall />}
						{item.name === 'Venti' && <SvgLungoMedium />}
						{item.name === 'Large' && <SvgLungoLarge />}
						<Text
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								padding: 24,
								margin: 8,
							}}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}
export default CoffeeSizesScreen;
