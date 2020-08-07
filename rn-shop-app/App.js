import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {composeWithDevTools} from 'redux-devtools-extension'; //Only for dev!

import productsReducer from './store/reducers/productsReducer';
import cartReducer from './store/reducers/cartReducer';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
	products: productsReducer, // this is your product state 'slice'
	cart: cartReducer
});

const store = createStore(rootReducer, composeWithDevTools()); //Only for dev!

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
	}
	
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const s = StyleSheet.create({
});
