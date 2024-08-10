import React, {Component, useState} from 'react';
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
import HeightPicker from '../Matrimony/WheelPicker';
import {Picker} from 'react-native-wheel-pick';

// create a component
const AiHeight = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <AiHade navigation={navigation} />
    </View>
  );
};

const AiHade = ({navigation}: any) => {
  const [selectedHeight, setSelectedHeight] = useState<string>('150 cm');

  const heightItems = Array.from(
    {length: 150},
    (_, index) => `${index + 1} `,
  );

  const handleValueChange = (value: string) => {
    setSelectedHeight(value);
    // console.log(value);
  };
  return (
    <View style={styles.aiHadeContainer}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigation.goBack()}>
          <Image style={styles.backarrow} source={Images.backarrow} />
        </TouchableOpacity>
        <View style={styles.containers}>
          <View style={styles.line}>
            <View style={styles.part1} />
          </View>
        </View>
      </View>
      <Text style={styles.name}>What is height?</Text>
      <Text style={styles.subText}>Please provide your height in cm</Text>

      <View style={styles.txtbtn}>
        {/* <View style={{flex:1}}> */}
        <Picker
          style={styles.picker}
          selectedValue={selectedHeight}
          pickerData={heightItems}
          onValueChange={handleValueChange}
        >
             <View style={styles.pickerline} />
        </Picker>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('gender')}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      {/* </View> */}
      </View>
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
    width: 100,
    backgroundColor: '#FF5069s',
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
    // flex: 1,
    justifyContent: 'space-between',
    height: RfH(569),
    width: RfW(300),
    marginTop: 41,
    alignItems: 'center',
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
   
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.UextraBold,
    fontWeight: '700',
  },
  picker: {
    width: RfW(100),
    height: RfH(377),
  },
  pickerline:{
    height: 1, // Line height
    backgroundColor: 'black', // Line color
    width: '100%', // Line width (full width)
    marginVertical: 10, 

  }
});

//make this component available to the app
export default AiHeight;
