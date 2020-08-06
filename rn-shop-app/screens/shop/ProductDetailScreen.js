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
import c from '../../constants/colours';
	
const ProductDetailScreen = (props) => {	
	const productId = props.navigation.getParam('productId');
	const selectedProduct = useSelector(
		state => state.products.availableProducts.find(prod => prod.id === productId)
	);

	return (	
		<ScrollView>
			<Image
				style={s.image}
				source={{uri: selectedProduct.imageUrl}}
			/>
			<View style={s.button}>
				<Button
					color={c.primary}
					title="Add to cart"
					onPress={() => {}}
				/>
			</View>
			<RegText style={s.price}>
				${selectedProduct.price.toFixed(2)}
			</RegText>
			<RegText style={s.description}>
				{selectedProduct.description}
			</RegText>
		</ScrollView>	
	);	
}	

ProductDetailScreen.navigationOptions = (navData) => {
	return {
		headerTitle: navData.navigation.getParam('productTitle')
	}
}
	
const s = StyleSheet.create({
	price: {
		color: c.darkGrey,
		fontSize: 20,
		textAlign: 'center',
		marginVertical: 20
	},
	description: {
		color: c.darkGrey,
		fontSize: 14,
		textAlign: 'center',
		marginHorizontal: 20
	},
	image: {
		width: '100%',
		height: 300
	},
	button: {
		alignItems: 'center', // the default align is stretch, center 'fixes' that
		marginVertical: 10
	}
});	
	
export default ProductDetailScreen;