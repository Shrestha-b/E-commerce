//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import { RfH, RfW } from '../utils/helpers';
import Images from '../themes/Images';
import { ColorSpace } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MyProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <View style={styles.headerstyle}>
                <Image style={styles.headerImg}  source={Images.menu}/>
                <Image  style={styles.headerImg} source={Images.bell}/>
                </View>
            </View>
            <View style={styles.profile}>
                <Image style={styles.profileImg} source={Images.profile}/>
                <Text style={{fontWeight:"600",fontSize:20,marginTop:20}}>Alia Warner</Text>
                <Text style={{fontWeight:"400",fontSize:14,marginTop:5}}>youremail@domain.com | +09 234 567 89</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.txtstyle}>Edit Profile Information</Text>
                <Text style={styles.txtstyle}>Notifications</Text>
                <Text style={styles.txtstyle}>Language</Text>
                <Text style={styles.txtstyle}>Security</Text>
                <Text style={styles.txtstyle}>Help & Support</Text>
                <Text style={styles.txtstyle}>Contact Us</Text>
                <Text style={styles.txtstyle}>Privacy & Policy</Text>
            </View>
        </View>
    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    headercontainer:{
        height: RfH(141),
        width: RfW(375),
        backgroundColor: '#FF5069'
    },
    headerstyle:{
        marginTop:10,
        height:18,
        width:335,
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
    },
    headerImg:{
        width: 18,
        height: 18
    },
    profile:{
        height: RfH(184),
        width: RfW(287),
        alignItems:'center',
        marginTop: -60

    },
    profileImg:{
        height: RfH(120),
        width: RfW(120),
    },
    footer:{
        marginTop: 40,
        backgroundColor:Colors.White,
        height: RfH(234),
        width: RfW(342),
        gap: 10,
    
    },
    txtstyle:{
        fontSize: 14,
        fontWeight:'400',
        color: 'black',
        marginLeft: 17
    }
});

//make this component available to the app
export default MyProfile;
