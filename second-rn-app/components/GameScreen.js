import React, {useState, useRef, useEffect} from 'react';
import {
	View, 
	StyleSheet,
	Text,
	Button,
	Alert,
	ScrollView,
	FlatList,
	Dimensions
} from 'react-native';
import NumberCon from './NumberCon';
import Card from './Card';
import {Ionicons} from '@expo/vector-icons'
import MainButton from './MainButton';
import c from '../constants/colours';
import s from '../constants/styles';

const genRandBetween = (min, max, exclude) => {
	min = Math.ceil(min); // rounds up
	max = Math.floor(max); // rounds down
	const randNum = Math.floor((Math.random() * (max - min)) + min );
	if (randNum === exclude) {
		return genRandBetween(min, max, exclude);
	} else {
		return randNum;
	}
}

const renderList = (listLength, itemData) => { // Here itemData is the default arg pasted by flatlist
	return (
		<View style={styles.listItem}>
			<Text style={{...s.reg18}}>{listLength - itemData.index}</Text>
			<Text style={{...s.reg18}}>{itemData.item}</Text>
		</View>
	);
}

const GameScreen = (props) => {
	const initialGuess = genRandBetween(1, 100, userNum);
	const {userNum, onGameOver} = props;
	const [guess, setGuess] = useState(initialGuess);
	const [pastGuessArr, setPastGuessArr] = useState([initialGuess.toString()]);
	const [currWidth, setCurrWidth] = useState(Dimensions.get('window').width);
	const [currHeight, setCurrHeight] = useState(Dimensions.get('window').height);
	const currLow = useRef(1); // the benifit of doing this is that the comp doesn't rerender when the val is changed.
	const currHigh = useRef(100);

	useEffect(() => {
		const updateLayout = () => {
			setCurrWidth(Dimensions.get('window').width);
			setCurrHeight(Dimensions.get('window').height);
		}
		Dimensions.addEventListener('change', updateLayout);
		return () => {
			Dimensions.removeEventListener('change', updateLayout);
		}
	});

	useEffect(() => {
		if (guess === userNum) {
			onGameOver(pastGuessArr.length);
		}
	}, [guess, userNum, onGameOver]); // This will only rerun if these consts change, not if props changes. vid 70

	const nextGuessHandler = (direction) => {
		if ((direction === 'lower' && guess < props.userNum) ||
				(direction === 'greater' && guess > props.userNum)) {
			Alert.alert(
				'Mmm...', 
				'your hint seems to be off', 
				[{text: 'Try again', style: 'cancel'}]
			);

			return ;
		}

		if (direction === 'lower') {
			currHigh.current = guess;
		} else if (direction === 'greater') {
			currLow.current = guess + 1;
		}

		const nextNum = genRandBetween(currLow.current, currHigh.current, guess);
		setGuess(nextNum);
		// setRounds(prevRounds => prevRounds + 1);
		setPastGuessArr(prevPastGuess => [nextNum.toString(), ...prevPastGuess])
	}

	if (currHeight < 500) {
		return (
			<View style={styles.screen}>
				<Text>Opponent's guess</Text>
				<View style={styles.control}>
					<MainButton onPress={() => nextGuessHandler('lower')}>
						<Ionicons name="md-remove" size={24} color="white"/>
					</MainButton>
					<NumberCon>{guess}</NumberCon>
					<MainButton onPress={() => nextGuessHandler('greater')}>
						<Ionicons name="md-add" size={24} color="white"/>
					</MainButton>
				</View>
				<View style={styles.listCon}>
					{/* <ScrollView contentContainerStyle={styles.list}>
						{pastGuessArr.map((guess, index) => (
							renderList(guess, pastGuessArr.length - index)
						))}
					</ScrollView> */}
					<FlatList 
						keyExtractor={item => item}				
						data={pastGuessArr}
						renderItem={renderList.bind(this, pastGuessArr.length)}
						contentContainerStyle={styles.list}
					/>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.screen}>
			<Text>Opponent's guess</Text>
			<NumberCon>{guess}</NumberCon>
			<Card style={styles.buttonCon}>
				<MainButton onPress={() => nextGuessHandler('lower')}>
					<Ionicons name="md-remove" size={24} color="white"/>
				</MainButton>
				<MainButton onPress={() => nextGuessHandler('greater')}>
					<Ionicons name="md-add" size={24} color="white"/>
				</MainButton>
			</Card>
			<View style={styles.listCon}>
				{/* <ScrollView contentContainerStyle={styles.list}>
					{pastGuessArr.map((guess, index) => (
						renderList(guess, pastGuessArr.length - index)
					))}
				</ScrollView> */}
				<FlatList 
					keyExtractor={item => item}				
					data={pastGuessArr}
					renderItem={renderList.bind(this, pastGuessArr.length)}
					contentContainerStyle={styles.list}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	buttonCon: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
		width: 300,
		maxWidth: '80%'
	},
	listItem: {
		borderColor: c.secondary,
		padding: 15,
		marginVertical: 10, 
		backgroundColor: '#fff',
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
	},
	control: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '80%'
	},	
	listCon: {
		flex: 1, // Need to add flex 1 to view with nested scroll for android
		width:  Dimensions.get('window').width > 350 ? '60%' : '80%', // Add Styles to view not scrollview
	},
	list: {
		flexGrow: 1, // to be able to take as much space but keeps normal behaviour
		// alignItems: 'center',
		justifyContent: 'flex-end'
	}
});

export default GameScreen;
