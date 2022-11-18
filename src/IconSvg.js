import { StyleSheet } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Colors = {
	lightOn: '#fff',
	lightOff: '#222222',
};

const IconSvg = (props) => {
	return (
		<Svg
			style={styles.icon}
			width={50}
			height={60}
			opacity={`${props.on ? 0.8 : 1}`}
			fill={`${props.on ? Colors.lightOn : Colors.lightOff}`}
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path d='M0 10c0 5.523 4.776 10 10.667 10V10C10.667 4.477 5.89 0 0 0v10ZM16 0c5.891 0 10.667 4.477 10.667 10v40C20.776 50 16 45.523 16 40V0Z' />
			<Path d='M40 32.5c0-5.523-4.776-10-10.667-10H2.667c0 5.523 4.775 10 10.666 10H40Z' />
		</Svg>
	);
};

export default IconSvg;

const styles = StyleSheet.create({
	icon: {
		position: 'absolute',
		bottom: 100,
		right: 50,
	},
});
