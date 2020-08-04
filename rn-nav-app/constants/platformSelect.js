import React from 'react';
import { 
	Platform,  
	TouchableNativeFeedback,
	TouchableOpacity,
	Text
} from 'react-native';
import c from './colours';

let os;
let headerText;
let headerbg;
let NativeButton;
let visibility;
let tabBarLabel;
let trackThumb;
let trackThumbFalse;

if (Platform.OS === 'ios') {
	os = 'ios'
	headerText = c.primary;
	headerbg = '#fff'
	NativeButton = TouchableOpacity;
	visibility = 'visible';
	tabBarLabel = (label) => label;
	trackThumb = '#fff';
	trackThumbFalse = '#fff';
} else if (Platform.OS === 'android') {
	os = 'android'
	headerText = "#fff"
	headerbg = c.primary
	NativeButton = TouchableNativeFeedback;
	visibility = 'hidden';
	tabBarLabel = (label) => (
		<Text style={{fontFamily: 'open-sans-bold'}}>
			{label}
		</Text>
	);
	trackThumb = c.primary;
	trackThumbFalse = '#f5f5f5';
}

console.log("Platform detector");

export const ps = {
	os,
	NativeButton,
	headerText,
	headerbg,
	visibility,
	tabBarLabel,
	trackThumb,
	trackThumbFalse
};