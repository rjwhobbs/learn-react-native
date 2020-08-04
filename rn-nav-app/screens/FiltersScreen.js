import React, {useState, useEffect, useCallback} from 'react';
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
				// but wait there's more, you can put this in the FilterSwitch comp
				onValueChange={props.onChange} 
			/>
		</View>
	)
}

const FiltersScreen = props => {
	const {navigation} = props;

	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	// So if saveFilters is recreated useEffect runs again
	const saveFilters = useCallback(() => {
		const appliedFilters = {
			isGlutenFree,
			isLactoseFree,
			isVegan,
			isVegetarian
		};
		console.log(appliedFilters);
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

	useEffect(() => {
		// NB set params will cause the comp to rebuild because it changes the props.
		navigation.setParams({save: saveFilters}); // this just adds to any already existing params
	}, [saveFilters]);

  return (
    <View style={s.screen}>
      <Text style={s.title}>Available filters</Text>
			<Filterswitch 
				label="Gluten free"
				state={isGlutenFree}
				onChange={newValue => setIsGlutenFree(newValue)}
			/>
			<Filterswitch 
				label="Lactose free"
				state={isLactoseFree}
				onChange={newValue => setIsLactoseFree(newValue)}
			/>
			<Filterswitch 
				label="Vegan"
				state={isVegan}
				onChange={newValue => setIsVegan(newValue)}
			/>
			<Filterswitch 
				label="Vegetarian"
				state={isVegetarian}
				onChange={newValue => setIsVegetarian(newValue)}
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
		),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CusHeaderButton}>
				<Item 
					title="Save"
					iconName="ios-save"
					onPress={navData.navigation.getParam('save')}
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
		width: '80%',
		marginBottom: 10
	}
});

export default FiltersScreen;
