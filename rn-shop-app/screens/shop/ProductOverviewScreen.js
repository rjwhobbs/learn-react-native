import React, { useState } from 'react';	
import { useSelector } from 'react-redux';
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	TextInput,
	FlatList	
} from 'react-native';	
	
const ProductsOverviewScreen = (props) => {	
	const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  );
}	
	
const s = StyleSheet.create({	
});	
	
export default ProductsOverviewScreen;