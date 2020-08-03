import React, { useState } from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';	
import {Ionicons} from '@expo/vector-icons';
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
} from 'react-native';	
const {ps} = require('../constants/platformSelect');
	
const CusHeaderButton = (props) => {	
	return (	
		<HeaderButton 
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={ps.headerText} 
		/> //Pulling out the key value pairs		
	);	
}	
	
const styles = StyleSheet.create({	
});	
	
export default CusHeaderButton;