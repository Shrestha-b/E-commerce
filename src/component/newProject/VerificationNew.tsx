import {
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

const AuthVerify = ({navigation, route}: {route: any; navigation: any}) => {
  const numInputs = 4; // Number of OTP input fields
  const [otp, setOtp] = useState<string[]>(Array(numInputs).fill(''));
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if a value is entered
    if (text.length > 0 && index < numInputs - 1) {
      inputs.current[index + 1]?.focus();
    }

    // Optionally, move to the previous input if the current input is cleared
    if (text.length === 0 && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          height: RfH(330),
          width: 325,
          backgroundColor: Colors.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
            height: RfH(29),
            width: RfW(266),
          }}>
          <Text style={styles.titleStyle}>Verification Code</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: RfH(45),
            width: RfW(224),
            flex: 1,
          }}>
          <Text style={styles.txtstyle2}>
            Please enter code we just send to
          </Text>
          <Text style={styles.txtstyle3}>
            +91 99292 77633 <Image source={Images.pen} />
          </Text>
        </View>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(el:any) => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              placeholder="-"
              onChangeText={text => handleChange(text, index)}
              value={value}
            />
          ))}
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => navigation.navigate('mytabs')}>
            <View style={styles.button}>
              <Text style={styles.btnText}>Verify</Text>
            </View>
          </TouchableOpacity>

          <View style={{marginVertical: RfH(20), flexDirection: 'row'}}>
            <Text
              style={{color: Colors.black, fontSize: 14, fontWeight: '400'}}>
              Didn’t receive OTP?
            </Text>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles: any = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    flex: 1,
  },
  otpInput: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    width: 40,
    fontSize: 20,
    fontWeight:'500'
  },
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
    marginRight: 5,
    color: 'black',
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
  resend: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
  input: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
    marginBottom: RfH(20),
    paddingLeft: RfW(8),
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(18),
    fontFamily: Fonts.UextraBold,
    fontWeight: '600',
  },
  button: {
    borderRadius: 10,
    height: 56,
    width: 325,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.appcolor,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  txtstyle2: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
  },
});

export default AuthVerify;
