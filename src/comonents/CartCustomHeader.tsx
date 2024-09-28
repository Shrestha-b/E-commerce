//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import Images from '../themes/Images';
import { RfH, RfW } from '../utils/helpers';

// create a component
const CustomCartHeader = () => {
    return (
        <View style={styles.container}>
            <Image source={Images.backarrow} style={{height:24, width:24}}></Image>
            <Image source={Images.heart} style={{height:20, width:20}}></Image>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: RfH(24),
        flexDirection:'row',
        justifyContent:'space-between',
        width:RfW(335),
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default CustomCartHeader;
