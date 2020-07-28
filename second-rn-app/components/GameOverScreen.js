import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import c from '../constants/colours';

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The game is over!</Text>
			<View style={styles.imageCon}>
				<Image 
					source={require('../assets/imgs/success.png')}
					style={styles.image}
					resizeMode='cover' // defualt
				/>
			</View>
			<Text>Number of rounds: {props.rounds}</Text>
			<Text>Number was: {props.userNum}</Text>
			<Button 
				title="New game"
				onPress={props.onNewGame}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageCon: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: c.primary,
		overflow: 'hidden',
		marginVertical: 30
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

export default GameOverScreen;
