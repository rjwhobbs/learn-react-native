import React from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	TextInput,	
	SafeAreaView	
} from 'react-native';	
	
const Favourites = () => {	
	return (	
		<View style={styles.screen}>
			<Text>Favourites screen</Text>	
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
	
export default Favourites;