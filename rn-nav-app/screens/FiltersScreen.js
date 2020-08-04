import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CusHeaderButton from '../components/CusHeaderButton';
import c from '../constants/colours';
const {ps} = require('../constants/platformSelect');

const Filterswitch = (props) => {
	return (
		<View style={s.filterCon}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{true: c.accent}}
				value={props.state}
				thumbColor={props.state ? ps.trackThumb : ps.trackThumbFalse}
				// Switch provides the new value, so I guess it has some kind of inner state
				onValueChange={newValue => props.onChange(newValue)} 
			/>
		</View>
	)
}

const FiltersScreen = props => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);

  return (
    <View style={s.screen}>
      <Text style={s.title}>Available filters</Text>
			<Filterswitch 
				label="Gluten free"
				state={isGlutenFree}
				onChange={setIsGlutenFree}
			/>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Meal filters',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CusHeaderButton}>
				<Item 
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	}
}

const s = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		margin: 20,
		textAlign: "center"
	},
	filterCon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%'
	}
});

export default FiltersScreen;
