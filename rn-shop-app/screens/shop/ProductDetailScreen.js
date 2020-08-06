import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	TextInput,	
	Image,
	ScrollView
} from 'react-native';	
import RegText from '../../components/styled/RegText';
import {useSelector} from 'react-redux';
	
const ProductDetailScreen = (props) => {	
	const productId = props.navigation.getParam('productId');
	const selectedProduct = useSelector(
		state => state.products.availableProducts.find(prod => prod.id === productId)
	);

	return (	
		<View>
			<RegText>
				{selectedProduct.title}
			</RegText>	
		</View>	
	);	
}	
	
const s = StyleSheet.create({	
});	
	
export default ProductDetailScreen;