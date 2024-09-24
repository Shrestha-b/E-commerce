import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../themes/Images';
import { RfH, RfW, responsiveFontSize } from '../../utils/helpers';
import Fonts from '../../themes/Fonts';
import PhoneInput from 'react-native-phone-number-input';
import { Checkbox } from 'react-native-paper';

typeinferance:{}
const MainLogin:React.FC  = ({navigation}:any) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.mainFlex}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.txt1}>
          We'll need your phone number to send an {'\n'}OTP for verification.
        </Text>
            <TextInput
              // value={number}
              placeholder="Enter your name"
              keyboardType="numeric"
              style={styles.inputStyle}
            />
        <View style={{height:70}}>
        <PhoneInput
            // ref={phoneInput}
            // defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
              // setValue(text);
            }}
            onChangeFormattedText={(text) => {
              // setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
        </View>      
        <Text style={styles.checkboxText}>
          Checkbox for Terms and Conditions, Privacy Policy hyperlink
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('horverificationnew')}>
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
        {/* <CountryPickers/> */}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    color: "#262626",
    fontFamily: Fonts.UfontBold,
    fontSize: responsiveFontSize(18),
  },
  divider:{
    fontSize: 25
  },
  textInputStyle: {
    color: Colors.appcolor,
    fontFamily: Fonts.UfontBold,
    fontSize: responsiveFontSize(18),
    height: RfH(56),
    width :220
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 325,
    height: 56,
    justifyContent:'space-around',
    borderRadius: 10,
    backgroundColor:Colors.white
  },
  login: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color:Colors.black
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    fontWeight: '700',
  },
  flagImage: {
    height: 35.6,
    width: 35.6,
    marginLeft: 1.68
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
    color: '#333333'
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
  mainFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    height:RfH(392),
    width:RfW(325),
    gap:30
  },
  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    // alignItems: 'center',
  },
  inputStyle:{
    height: RfH(56),
    width: RfW(300),
    borderRadius: 10,
    fontSize: 20,
    backgroundColor:Colors.white,
    paddingLeft: 10
  },
  line: {
    width: 1,
    height: 24,
    backgroundColor: '#D8D8D8', // You can change the color as needed
  },
  containers: {
    flex: 1,
    padding: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },

});

export default MainLogin;
