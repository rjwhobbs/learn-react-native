import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
} from 'react-native';	
	
const BoldText = (props) => {	
	return (	
		<Text style={{...s.regText, ...props.style}}>
			{props.children}	
		</Text>	
	);	
}	
	
const s = StyleSheet.create({
	regText: {
		fontFamily: 'open-sans-bold',
	}
});	
	
export default BoldText;