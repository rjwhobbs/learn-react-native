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

import ProductItem from '../../components/shop/ProductItem'

// const ListRender = ()
	
const ProductsOverviewScreen = (props) => {	
	const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={
				itemData => (
					<ProductItem 
						title={itemData.item.title}
						price={itemData.item.price}
						image={itemData.item.imageUrl}
						onViewDetail={() => {
							props.navigation.navigate({
								routeName: 'ProductDetail',
								params: {
									productId: itemData.item.id,
									productTitle: itemData.item.title
								}
							})
						}}
						onAddToCart={() => {}}
					/>
				)}
    />
  );
}	

ProductsOverviewScreen.navigationOptions = {
	headerTitle: 'All products'
}
	
const s = StyleSheet.create({	
});	
	
export default ProductsOverviewScreen;