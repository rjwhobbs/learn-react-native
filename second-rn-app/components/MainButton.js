import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import c from '../constants/colours';
import s from '../constants/styles';

const MainButton = (props) => {
	let ButtonComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		ButtonComp = TouchableNativeFeedback;
	}
	return (
		<View style={styles.buttonCon}>
			<ButtonComp onPress={props.onPress}>
				<View style={styles.button}>
					<Text style={{...styles.buttonText, ...s.reg18}}>
						{props.children}
					</Text>
				</View>
			</ButtonComp>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonCon: {
		borderRadius: 25,
		overflow: 'hidden'
	},
	button: {
		backgroundColor: c.primary,
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 10
	},
	buttonText: {
		color: '#fff'
	}
});

export default MainButton;
