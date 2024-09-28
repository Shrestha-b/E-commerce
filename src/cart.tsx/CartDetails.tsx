import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomCartHeader from '../comonents/CartCustomHeader';
import { responsiveFontSize, RfH, RfW } from '../utils/helpers';

// create a component
const CartDetails = () => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
            <CustomCartHeader />
            </View>
            <View style={styles.MycartTxtcontainer}>
              <Text style={{fontSize:responsiveFontSize(22), fontWeight:600, color:Colors.black}}>My Cart</Text>
              <Text style={{fontSize:responsiveFontSize(14), color:Colors.grey}}>2 Items</Text>
            </View>
           <View>
            
           </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.white,
        justifyContent:'center'
    },
    MycartTxtcontainer:{
        height:RfH(46),
        width:RfW(83),
        flex:1,
        justifyContent:'center',
        alignItems:'center',


       }
});

//make this component available to the app
export default CartDetails;
