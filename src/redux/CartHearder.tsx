//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RfH, RfW } from '../utils/helpers';
import { UseSelector } from 'react-redux';
// create a component
const CartHeader: any = () => {
    return (
        <View style={styles.Container}>
            <Text style={{fontSize:22, marginBottom:20}}>0</Text>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    Container: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor:'yellow',
        height: RfH(50),
        width: RfW(370)
    },
});

//make this component available to the app
export default CartHeader;
