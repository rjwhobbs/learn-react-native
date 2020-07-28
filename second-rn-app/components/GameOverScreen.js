import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import c from '../constants/colours';
import s from '../constants/styles';

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>The game is over!</Text>
			<View style={styles.imageCon}>
				<Image 
					fadeDuration={1000} // After caching they won't be faded
					source={require('../assets/imgs/success.png')} //local
					// RN cant get width and height form image from the web
					// source={{uri: 'https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg'}} 
					style={styles.image}
					resizeMode='cover' // defualt
				/>
			</View>
			<Text style={{...styles.resultCon, ...s.reg}}> 
				{/* styles inheret in nested <Text /> */}
				Number of rounds: 
				<Text style={s.bold}> {props.rounds} </Text>
				. Number was: 
				<Text style={s.bold}> {props.userNum}</Text>
			</Text>
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
	},
	resultCon: {
		marginHorizontal: 30,
		textAlign: 'center'
	}
});

export default GameOverScreen;
