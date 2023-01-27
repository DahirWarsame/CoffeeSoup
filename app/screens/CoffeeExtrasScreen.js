import React, { useState } from 'react';
import {
	View,
	FlatList,
	TouchableOpacity,
	Animated,
	StyleSheet,
} from 'react-native';
import useCoffeeMachine from '../hooks/useCoffeeMachine';

import Text from '../components/Text';
import ItemContainer from '../components/ItemComponent';
import FancyButton from '../components/FancyButton';
import SvgMilk from '../components/SvgMilk';

function CoffeeExtrasScreen({ navigation, route }) {
	const { extras } = useCoffeeMachine();
	const { type, size } = route.params;
	const [selectedExtras, setSelectedExtras] = useState([]);
	const [visibleExtras, setVisibleExtras] = useState({});

	//Added selected Extras to array
	const handleSelectExtra = (extra) => {
		const parentId = extras.find((e) =>
			e.subselections.includes(extra)
		)._id;
    
		if (selectedExtras.includes(extra)) {
			setSelectedExtras(selectedExtras.filter((e) => e !== extra));
		} else {
			setSelectedExtras(
				selectedExtras
					.filter((e) => e.parentId !== parentId)
					.concat([{ ...extra, parentId }])
			);
		}
	};

	const toggleExtra = (extra) => {
    if(type.extras.includes(extra._id)){
      setVisibleExtras({
        ...visibleExtras,
        [extra._id]: !visibleExtras[extra._id],
      });
    }
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={extras}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					const isVisible = visibleExtras[item._id];
					const heightAnim = new Animated.Value(isVisible ? 250 : 0);
					return (
						<View style={[styles.extras]}>
								<TouchableOpacity
									onPress={() => toggleExtra(item)}
								>
							<View style={styles.straight}>
									<SvgMilk />
									<Text
										style={{
                      marginLeft:5,
                      marginBottom:5
										}}
									>
										{item.name}
									</Text>
							</View>
								</TouchableOpacity>

							<Animated.View
								style={{
									height: heightAnim,
									overflow: 'hidden',
								}}
							>
								{type.extras.includes(item._id) && (
									<FlatList
										data={item.subselections}
										keyExtractor={(sub) => sub._id}
										renderItem={({ item: sub }) => (
											<View
												style={{
													flexDirection: 'row',
													// alignItems: 'center',
													backgroundColor: '#9BC88B',
												}}
											>
												<ItemContainer
													title={sub.name}
													onPress={() =>
														handleSelectExtra(sub)
													}
                          // backgroundColor='#9BC88B'
                          backgroundColor={selectedExtras.includes(sub) ? '#9BC88B' : 'white'}
												/>
											</View>
										)}
									/>
								)}
							</Animated.View>
						</View>
					);
				}}
			/>
			<FancyButton
				title="Next"
				onPress={() => {
					navigation.navigate('Confirmation', {
						type,
						size,
						extras: selectedExtras,
					}, console.log(type,size));
				}}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		// justifyContent: 'space-between',
	},
	extras: {
		backgroundColor: '#AED7A0',
		margin: 10,
		padding: 21,
		boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.15)',
		borderRadius: 4,
	},
	straight: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
    marginBottom:5
	},
  
});

export default CoffeeExtrasScreen;
