import React from 'react';
import { TouchableOpacity } from 'react-native';

import Text from '../components/Text';
const ItemContainer = ({ title, onPress, backgroundColor = '#AED7A0' }) => {
	return (
		<TouchableOpacity
			style={{
				alignItems: 'flex-start',
				flexGrow: 1,
				padding: 24,
				margin: 8,
				backgroundColor: '#AED7A0',
				boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.15)',
				borderRadius: 4,
				fontFamily: 'Avenir-Next',
			}}
			onPress={onPress}
		>
			<Text>{title}</Text>
		</TouchableOpacity>
	);
};
export default ItemContainer;
