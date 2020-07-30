import React from 'react';
import { Platform } from 'react-native';
import c from './colours';

let headerText;
let headerbg;

if (Platform.OS === 'ios') {
	headerText = c.primary;
	headerbg = '#fff'
} else if (Platform.OS === 'android') {
	headerText = "#fff"
	headerbg = c.primary
}

export const pc = {
	headerText,
	headerbg
};