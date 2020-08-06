import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
} from 'react-native';	
	
const RegText = (props) => {	
	return (	
		<Text {...props}>
			{props.children}	
		</Text>	
	);	
}	
	
const s = StyleSheet.create({

});	
	
export default RegText;