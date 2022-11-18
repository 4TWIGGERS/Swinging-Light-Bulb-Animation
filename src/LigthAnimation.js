import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Pressable } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	interpolate,
	withRepeat,
} from 'react-native-reanimated';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';
import TextContent from './TextContent';
import IconSvg from './IconSvg';
import BulbSvg from './BulbSvg';

const { width, height } = Dimensions.get('screen');

const Colors = {
	light: '#ebd1a4',
	lightOn: '#fff',
	lightOff: '#222222',
};

export default function LightAnimation(...props) {
	const rotationValue = useSharedValue(-1);

	const [bulbOn, setBulbOn] = useState(false);

	useEffect(() => {
		rotationValue.value = withRepeat(
			withTiming(1, { duration: 1500 }),
			-1,
			true
		);
	}, []);

	const onBulbPress = () => setBulbOn(!bulbOn);

	const bulbRotationStyles = useAnimatedStyle(() => {
		const rotate = interpolate(rotationValue.value, [-1, 0, 1], [-10, 0, 10]);

		return {
			transform: [
				{ translateY: -90 },
				{ rotate: `${rotate}deg` },
				{ translateY: 90 },
			],
		};
	});

	const lightRotationStyles2 = useAnimatedStyle(() => {
		const rotate = interpolate(rotationValue.value, [-1, 0, 1], [-35, 0, 35]);

		return {
			transform: [
				{ translateX: -rotate + 50 },
				{ translateY: -19 },
				{ translateY: 19 },
			],
		};
	});

	return (
		<View style={styles.container}>
			<Animated.View style={[bulbRotationStyles, styles.bulbContainer]}>
				<View
					style={[
						styles.lineStyle,
						{ backgroundColor: bulbOn ? Colors.lightOn : Colors.lightOff },
					]}
				/>
				<Pressable onPress={onBulbPress}>
					<BulbSvg on={bulbOn} />
				</Pressable>
			</Animated.View>

			<TextContent on={bulbOn} />

			<Animated.View style={[styles.animatedLightStyle, lightRotationStyles2]}>
				<Svg height={height} width={width + width}>
					<Defs>
						<RadialGradient id='grad2'>
							<Stop
								offset='100%'
								stopColor={Colors.light}
								stopOpacity={`${bulbOn ? 0.03 : 0}`}
							/>
							<Stop
								offset='80%'
								stopColor={Colors.light}
								stopOpacity={`${bulbOn ? 0.15 : 0}`}
							/>
							<Stop
								offset='60%'
								stopColor={Colors.light}
								stopOpacity={`${bulbOn ? 0.29 : 0}`}
							/>
							<Stop
								offset='40%'
								stopColor={Colors.light}
								stopOpacity={`${bulbOn ? 0.45 : 0}`}
							/>
							<Stop
								offset='10%'
								stopColor={Colors.light}
								stopOpacity={`${bulbOn ? 0.72 : 0}`}
							/>
						</RadialGradient>
					</Defs>
					<Circle cx='475' cy='235' r='307' fill='url(#grad2)' />
				</Svg>
			</Animated.View>

			<IconSvg on={bulbOn} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		overflow: 'hidden',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
	},

	bulbContainer: {
		left: '20%',
		top: 0,
		position: 'absolute',
		alignItems: 'center',
		zIndex: 1,
	},
	lineStyle: {
		width: 2,
		height: 200,
		opacity: 0.3,
	},
	animatedLightStyle: {
		top: 0,
		right: 30,
		position: 'absolute',
	},
});
