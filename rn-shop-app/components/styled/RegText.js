import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
} from 'react-native';	
	
const RegText = (props) => {	
	return (	
		<Text style={{...s.regText, ...props.style}}>
			{props.children}	
		</Text>	
	);	
}	
	
const s = StyleSheet.create({
	regText: {
		fontFamily: 'open-sans',
	}
});	
	
export default RegText;