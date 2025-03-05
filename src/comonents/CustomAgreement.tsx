import React, { Component } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { responsiveFontSize, RfH, RfW } from '../utils/helpers';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';


interface CustomAgreements{
    Aggreement: string;
    Name: string;
}

const CustomAgreement:React.FC <CustomAgreements> = (props,{navigation}:any) => {
    const{
    Aggreement,
    Name
    } = props 
 
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(Name)}>
            <Text style={{color: Colors.black,fontSize:responsiveFontSize(14), fontFamily:Fonts.Archivo}}>{Aggreement}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:  Colors.white,
        height: RfH(20),
        width: RfW(310),
        alignSelf:'center',
        

    },
});

export default CustomAgreement;

