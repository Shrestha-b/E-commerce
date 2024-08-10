import React, {Component,useState} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Images from '../themes/Images';
import {RfH, RfW} from '../utils/helpers';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Fonts from '../themes/Fonts';
import {responsiveFontSize} from '../utils/helpers';
import { RadioButton } from 'react-native-paper';

// create a component
const MarriageStatus = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <AiHade navigation={navigation}/>
    </View>
  );
};

const AiHade = ({navigation}:any) => {
  return (
    <View style={styles.aiHadeContainer}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.touchableOpacity}onPress={() => navigation.goBack()}>
          <Image style={styles.backarrow} source={Images.backarrow} />
        </TouchableOpacity>
        <View style={styles.containers}>
          <View style={styles.line}>
            <View style={styles.part1} />
          </View>
        </View>
      </View>
      <Text style={styles.name}>What’s Your Marriage Status?</Text>
      <Text style={styles.subText}>Provide us with further insights</Text>

      <View style={styles.txtbtn}>
        <View style={styles.married}>
        
        </View>
        <View style={styles.divorced}>
        <View>
        <Radio />
        </View>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('uploadphoto')}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


// App.js



const Radio = () => {
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.containerss}>
      <RadioButton.Group
        onValueChange={newValue => setChecked(newValue)}
        value={checked}
      >
      <View style={styles.radioButtonBox}>
        <View style={styles.radioButton}>
          <Text style={{fontSize:14,fontWeight:400}}>Single</Text>
          <RadioButton value="first" />
        </View>
      </View>

      <View style={styles.radioButtonBox2}>
        <View style={styles.radioButton}>
        <Text style={{fontSize:14,fontWeight:400}}>Divorced</Text>
        <RadioButton value="second" />
        </View>
      </View>
      </RadioButton.Group>
    </View>
 
  );
};


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiHadeContainer: {
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  touchableOpacity: {
    marginLeft: 20,
  },
  backarrow: {
    width: 24,
    height: 24,
    marginTop: 10,
  },
  containers: {
    flex: 1,
    marginLeft: 77,
    marginTop: 18,
  },
  line: {
    flexDirection: 'row',
    width: RfW(180),
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#FFE9F1',
    height: RfW(8), // Set the height of the line
  },
  part1: {
    width: 148,
    backgroundColor: '#FF5069',
    borderRadius: 50, // Color for the first part
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 50,
    color: Colors.black,
  },
  subText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
  },
  txtbtn: {
    flex: 1,
    // justifyContent: 'space-between',
    height: RfH(569),
    width: RfW(300),
    marginTop: 41
    
  },
  textInput: {
    height: 48,
    width: 300,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    // padding: 10
    padding: 10,
    // borderColor: '#000', // Optional: Border color if needed
    // borderWidth: 1,      // Optional: Border width if needed
    // borderRadius: 5,     // Optional: Border radius if needed
    // paddingLeft: 10,
  },
  button: {
    borderRadius: 10,
    height: 51,
    width: 319,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5069',
    marginTop: 500,
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.UextraBold,
    fontWeight: '700',
  },
  married:{

  },
  divorced:{
    
  },
  containerss: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 41
  },
  radioButtonBox: {
    backgroundColor: 'white',
    width: 300,
    height: 48, // Adjusted to accommodate vertical spacing
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14, // Added to align content within the box
  },
  radioButtonBox2: {
    backgroundColor: 'white',
    width: 300,
    height: 48, // Adjusted to accommodate vertical spacing
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    paddingVertical: 14, // Added to align content within the box
  },
  radioButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },


});

//make this component available to the app
export default MarriageStatus;
