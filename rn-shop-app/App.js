import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/productsReducer';
// import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      {/* <ShopNavigator /> */}
			<View></View>
    </Provider>
  );
}

const s = StyleSheet.create({
});
