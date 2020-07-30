import React from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	TextInput,	
	SafeAreaView	
} from 'react-native';	
	
const MealDetail = () => {	
	return (	
		<View style={styles.screen}>
			<Text>Meal Detail screen</Text>	
		</View>	
	);	
}	
	
const styles = StyleSheet.create({	
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});		
	
export default MealDetail;