import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {RfH, RfW, responsiveFontSize} from '../../utils/helpers';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Images from '../../themes/Images';
import LinearGradient from 'react-native-linear-gradient';

const AuthVerify = ({navigation, route}: {route: any; navigation: any}) => {

  return (
      <LinearGradient colors={['#FFFF', 'pink', Colors.appcolor]} style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.titleStyle}>Verification Code</Text>
            <Text style={styles.txtstyle2}>Please enter code we just send to</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={styles.txtstyle3}>+91 99292 77633</Text>
          <Image source={Images.pen} />
        </View>
      <View style={styles.otpContainer}>
            <TextInput
              // key={index}
              // ref={el => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              // onChangeText={text => handleChange(text, index)}
              // value={value}
            />
             <TextInput
              // key={index}
              // ref={el => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              // onChangeText={text => handleChange(text, index)}
              // value={value}
            />
            <TextInput
              // key={index}
              // ref={el => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              // onChangeText={text => handleChange(text, index)}
              // value={value}
            />
            <TextInput
              // key={index}
              // ref={el => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              // onChangeText={text => handleChange(text, index)}
              // value={value}
            />
        </View>

        <View style={{marginTop: RfH(30)}}>
          <TouchableOpacity onPress={()=>navigation.navigate('mytabs')}>
            <View style={styles.button}>
              <Text style={styles.btnText}>Verify</Text>
            </View>
          </TouchableOpacity>
            <View style={{marginVertical: RfH(20),flexDirection:'row'}}>
            <Text>Didn’t receive OTP?</Text>
        </View>
        </View>
      </LinearGradient>
  );
};

const styles: any = StyleSheet.create({
  // -----------------------css for new otp

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  },
  otpInput: {
    // borderBottomWidth: ,
    // borderColor: Colors.tooLightGreen,
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(24),
    textAlign: 'center',
    height:56,
    width:56,
    borderRadius: 10
  },

  // ------------------------

  imageSize12: {
    width: 25,
    height: 25,
    tintColor: Colors.appcolor,
    marginVertical: RfH(25),
  },
  headerResendText: {
    marginVertical: RfH(10),
    marginHorizontal: RfW(10),
    marginTop: RfH(20),
  },
  txtstyle3: {
    fontSize: responsiveFontSize(14),
    marginBottom: RfH(20),
    fontFamily: Fonts.UextraBold,
    marginTop: 5,
    marginRight:5,
    // fontWeight: '900',
    color: Colors.black,
    // textShadowColor: Colors.textShadow, // Shadow color
    // textShadowOffset: {width: 1, height: 1}, // Shadow offset
    textShadowRadius: 2,
  },
  nameInput: {
    color: Colors.appcolor,
    fontFamily: Fonts.UfontBold,
    fontSize: responsiveFontSize(18),
    marginLeft: RfW(10),
  },
  resendText: {
    fontFamily: Fonts.UfontBold,
    color: Colors.black,
  },
  resend:{
    fontSize: 14,
    fontWeight:'600',
    color: Colors.black
  },
  input: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
    marginBottom: RfH(20),
    paddingLeft: RfW(8),
  },
  infoText: {
    color: Colors.black,
    fontFamily: Fonts.UfontMedium,
    fontSize: responsiveFontSize(14),
    textShadowColor: Colors.black, // Shadow color
    textShadowOffset: {width: 0.5, height: 0.5}, // Shadow offset
    textShadowRadius: 1,
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(18),
    fontFamily: Fonts.UextraBold,
    fontWeight:'600',

  },
  button: {
    // borderWidth: 1,
    borderRadius: 10,
    // paddingVertical: RfH(15),
    // paddingHorizontal: RfW(150),
    height:56,
    width: 325,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: Colors.appcolor,
    // marginTop: RfH(30),
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent:'center',
    alignItems:'center'
  },
  titleStyle: {
    fontSize: responsiveFontSize(24),
    marginBottom: RfH(20),
    marginTop: RfH(20),
    fontFamily: Fonts.UextraBold,
    // fontWeight: '900',
    color: Colors.black,
    // textShadowColor: Colors.textShadow, // Shadow color
    // textShadowOffset: {width: 1, height: 1}, // Shadow offset
    textShadowRadius: 2,
  }
});

export default AuthVerify;
