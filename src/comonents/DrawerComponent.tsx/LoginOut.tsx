import React, { Component } from 'react';
import { View,Image, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const LogOut = ({navigation}:any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={{fontSize:20}}>hello</Text>
      </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
    },
});

//make this component available to the app
export default LogOut;
