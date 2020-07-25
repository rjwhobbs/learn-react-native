import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
		<View style={styles.container}>
      <View
        style={{
					flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
					flex: 2,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		padding: 50, 
		flexDirection: 'row',
		width: '80%',
		height: 300,
		justifyContent: 'space-around',
		alignItems: 'stretch'
	}
});
