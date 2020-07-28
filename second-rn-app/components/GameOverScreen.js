import React from 'react';
import {View, Text, StyleSheet, Button, Image, Dimensions, ScrollView} from 'react-native';
import c from '../constants/colours';
import s from '../constants/styles';
import MainButton from './MainButton';

const GameOverScreen = (props) => {
	return (
		<ScrollView>
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
				<MainButton onPress={props.onNewGame}>
					New game
				</MainButton>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageCon: {
		width: Dimensions.get('window').width * 0.7 ,
		height: Dimensions.get('window').width * 0.7 ,
		borderRadius: Dimensions.get('window').width * 0.7 , // border radius should always be half
		borderWidth: 3,
		borderColor: c.primary,
		overflow: 'hidden',
		marginVertical: Dimensions.get('window').height / 30
	},
	image: {
		width: '100%',
		height: '100%'
	},
	resultCon: {
		marginHorizontal: 30,
		textAlign: 'center',
		marginVertical: Dimensions.get('window').height / 60
	}
});

export default GameOverScreen;
