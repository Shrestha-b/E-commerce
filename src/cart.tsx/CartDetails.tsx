import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomCartHeader from '../comonents/CartCustomHeader';
import { responsiveFontSize, RfH, RfW } from '../utils/helpers';

// create a component
const CartDetails = () => {
    return (
        <View style={styles.container}>
            <View style={{height:RfH(24), width:RfW(335)}}>
            <CustomCartHeader />
            </View>
          
            <View style={styles.MycartTxtcontainer}>
              <Text style={{fontSize:responsiveFontSize(22), fontWeight:600, color:Colors.black}}>My Cart</Text>
              <Text style={{fontSize:responsiveFontSize(14), color:Colors.grey}}>2 Items</Text>
            </View>
           <View style={{flex:1,backgroundColor:'green',width:RfW(300)}}>
            
           </View>
           <View style={{flex:1, width:RfW(376),height:RfH(255), justifyContent:'center', alignItems:'center'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',height:RfH(22),width:RfW(338)}}>
                <Text style={{color:Colors.gray}}>Sub total :</Text>
                <Text style={{fontSize:18, color:Colors.black}}>kdd</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',height:RfH(22),width:RfW(338)}}>
                <Text style={{color:Colors.gray}}>ds</Text>
                <Text style={{fontSize:18, color:Colors.black}}>sd</Text>
            </View>
            <View style={styles.line}/>
            <View></View>
            <View></View>
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
        justifyContent:'center',
        alignItems:'center',
       },
       line: {
        borderBottomColor: '#C9BFC0', // Change to desired color
        borderBottomWidth: 1,       // Change to desired thickness
        alignSelf: 'stretch',  
        width:RfW(338),
      },
});

//make this component available to the app
export default CartDetails;
