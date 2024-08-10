import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../themes/Images';
import { RfH, RfW, responsiveFontSize } from '../../utils/helpers';
import Fonts from '../../themes/Fonts';

const MainLogin = ({navigation}:any) => {
  const [isSelected, setSelection] = useState(false);
  console.log(Images.flag);
  return (
    <View style={styles.container}>
      <LinearGradient colors={['white', '#FFFFFF', '#FF5069']} style={styles.linearGradient}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.txt1}>
          We'll need your phone number to send an {'\n'}OTP for verification.
        </Text>
        <SafeAreaView>
          <View style={styles.input}>
            <TextInput
              // value={number}
              placeholder="Enter your name"
              // keyboardType="numeric"
            />
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.phoneInputContainer}>
          <View style={styles.textInput}>
            <Image style={styles.flagImage} source={Images.flag} />
            <Text style={styles.text91}>+91</Text>
            <Image style={styles.dropdownarrow} source={Images.dropdownarrow} />
            <Text style={styles.divider}>|</Text>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Enter phone number"
              placeholderTextColor={Colors.appcolor}
              keyboardType="phone-pad"
              // value={phoneNumber}
              // onChangeText={setPhoneNumber}
              maxLength={10}
            />
          </View>
        </SafeAreaView>

        <Text style={styles.checkboxText}>
          Checkbox for Terms and Conditions, Privacy Policy hyperlink
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('horverificationnew')}>
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 56,
    width: 325,
    padding: 10,
    backgroundColor: Colors.white,
  },
  dropdownarrow:{
   height: 3.62,
   width:7.5
    },
  text91: {
    marginTop: RfH(18),
    color: Colors.appcolor,
    fontFamily: Fonts.UfontBold,
    fontSize: responsiveFontSize(18),
    marginBottom: 10
  },
  divider:{
    fontSize: 25
  },
  textInputStyle: {
    color: Colors.appcolor,
    fontFamily: Fonts.UfontBold,
    fontSize: responsiveFontSize(18),
    marginLeft: RfW(5),
    width: '80%',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 325,
    height: 56,
    paddingHorizontal: 10,
    backgroundColor:Colors.white
  },
  login: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    fontWeight: '700',
  },
  flagImage: {
    height: 30,
    width: 30,
  },
  checkboxText: {
    marginTop: 15,
    fontSize: 10,
  },
  mainContainer: {
    gap: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt1: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF5069',
    padding: 10,
    borderRadius: 10,
    height: 56,
    width: 325,
    marginTop: 20,
  },
  continue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainLogin;
