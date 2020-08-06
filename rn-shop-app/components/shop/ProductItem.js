import React, { useState } from 'react';	
import {	
	StyleSheet,	
	Text,	
	View,	
	Button,	
	Image,	
	NativeModules
} from 'react-native';	
import RegText from '../styled/RegText';
const {ps} = require('../../constants/platformSelect');
import c from '../../constants/colours'
	
const ProductItem = (props) => {
	const NativeFeedBack = ps.NativeButton;	
	return (
		<NativeFeedBack 
			onPress={props.onViewDetail}
			useForeground /* Wow a comment broke rn, any way this is only on android */ > 
			<View style={s.shadowCon}>
				<View style={s.product}>
					<View style={s.imageCon}>
						<Image 
							style={s.image}
							source={{uri: props.image}}
						/>
					</View>
					<View style={s.details}>
						<RegText style={s.title}>
							{props.title}
						</RegText>
						<RegText style={s.price}>
							${props.price.toFixed(2)}
						</RegText>
					</View>
					<View style={s.actions}>
						<Button 
							title="View Details"
							onPress={props.onViewDetail}
							color={c.primary}
						/>
						<Button 
							title="Add to cart"
							onPress={props.onAddToCart}
							color={c.primary}
						/>
					</View>
				</View>
			</View>	
		</NativeFeedBack>	
	);	
}	
	
const s = StyleSheet.create({	
	shadowCon: {
		borderRadius: 10,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: {width: 0, height: 2},
		shadowRadius: 8,
	},
	product: {
		borderRadius: 10,
		elevation: 5,
		backgroundColor: 'white',
		height: 300,
		margin: 20,
		overflow: ps.visibility
	},
	imageCon: {
		width: '100%',
		height: '60%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%',
	},
	title: {
		fontSize: 18,
		marginVertical: 4
	},
	details: {
		alignItems: 'center',
		height: '15%',
		padding: 8
	},
	price: {
		fontSize: 18,
		color: c.accent
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '25%',
		paddingHorizontal: 20
	}
});	
	
export default ProductItem;