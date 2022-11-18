import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import LightAnimation from './src/LigthAnimation';
import { useFonts } from 'expo-font';
const App = () => {
	const [fontsLoaded] = useFonts({
		Albiona: require('./assets/font/Albiona.otf'),
	});

	if (!fontsLoaded) return null;
	return (
		<View style={{ flex: 1 }}>
			<LightAnimation />
		</View>
	);
};

export default App;
