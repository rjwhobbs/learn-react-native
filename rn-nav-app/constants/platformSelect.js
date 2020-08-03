import React from 'react';
import { 
	Platform,  
	TouchableNativeFeedback,
	TouchableOpacity,
} from 'react-native';
import c from './colours';

let os;
let headerText;
let headerbg;
let NativeButton;
let visibility;

if (Platform.OS === 'ios') {
	os = 'ios'
	headerText = c.primary;
	headerbg = '#fff'
	NativeButton = TouchableOpacity;
	visibility = 'visible';
} else if (Platform.OS === 'android') {
	os = 'android'
	headerText = "#fff"
	headerbg = c.primary
	NativeButton = TouchableNativeFeedback;
	visibility = 'hidden';
}

console.log("Platform detector");

export const ps = {
	os,
	NativeButton,
	headerText,
	headerbg,
	visibility
};