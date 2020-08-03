import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	FlatList	
} from 'react-native';	
import MealItem from '../components/MealItem';
	
const MealList = (props) => {	
	const renderMealItem = (itemData) => {
		return (
			<MealItem 
				title={itemData.item.title}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				value={itemData.item.value}
				image={itemData.item.imgUrl}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'MealDetail',
						params: {
							mealId: itemData.item.id
						}
					})
				}}
			/>
		);
	}

	return (	
		<View style={styles.list}>
			<FlatList
				style={{width: '100%'}}
				data={props.listData}
				renderItem={renderMealItem} 
			/>
		</View>
	);	
}	
	
const styles = StyleSheet.create({	
	list: {
    flex: 1,
    justifyContent: 'center',
		alignItems: 'center', 
		padding: 15
  }
});	
	
export default MealList;