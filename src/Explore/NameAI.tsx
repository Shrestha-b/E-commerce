import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Images from '../themes/Images';
import { RfH, RfW } from '../utils/helpers';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Fonts from '../themes/Fonts';
import { responsiveFontSize } from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { AddUserName } from '../redux/Action';

const NameAI = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <AiHade navigation={navigation} />
    </View>
  );
};

const AiHade = ({ navigation }: any) => {
  const [text, setOnChangeText] = useState<string>(''); // State to handle the name input
  const dispatch = useDispatch(); // Moved the useDispatch hook inside the component

  const handleAddToCart = () => {
    dispatch(AddUserName(text)); // Dispatch the name to Redux
    navigation.navigate('emailaddress'); // Navigate to the next screen
  };


  return (
    <View style={styles.aiHadeContainer}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.goBack()}>
          <Image style={styles.backarrow} source={Images.backarrow} />
        </TouchableOpacity>
        <View style={styles.containers}>
          <View style={styles.line}>
            <View style={styles.part1} />
          </View>
        </View>
      </View>
      <Text style={styles.name}>What’s Your Name? {text}</Text>
      <Text style={styles.subText}>We'll need your email to stay in touch</Text>

      <View style={styles.txtbtn}>
        <TextInput
          style={styles.textInput}
          onChangeText={setOnChangeText} // Set the input to state
          value={text}
          placeholder="Enter Your Name"
          placeholderTextColor="#000" // Placeholder text color
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Define styles
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
    width: 22.5,
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
    height: RfH(569),
    width: RfW(300),
    marginTop: 41,
  },
  textInput: {
    height: 48,
    width: 300,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    padding: 10,
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
});

export default NameAI;
