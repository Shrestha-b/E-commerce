import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Images from '../themes/Images';
import {RfH, RfW} from '../utils/helpers';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Fonts from '../themes/Fonts';
import {responsiveFontSize} from '../utils/helpers';

const Gender = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <AiHade navigation={navigation} />
    </View>
  );
};

const AiHade = ({navigation}: any) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
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

      <Text style={styles.name}>What’s Your Gender?</Text>
      <Text style={styles.subText}>Tell us about your gender</Text>

      <View style={styles.txtbtn}>
        <View>
          <TouchableOpacity onPress={() => handleGenderSelect('Male')}>
            <View
              style={[
                styles.genderOption,
                selectedGender === 'Male' ? styles.selected : styles.unselected,
              ]}>
              <Image source={Images.Male} />
              <Text style={styles.genderText}>Male</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleGenderSelect('Female')}>
            <View
              style={[
                styles.genderOption,
                selectedGender === 'Female'
                  ? styles.selected
                  : styles.unselected,
              ]}>
              <Image source={Images.female} />
              <Text style={styles.genderText}>Female</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('marriagestatus')}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
    marginTop: 18,
  },
  touchableOpacity: {
    marginLeft: 20,
  },
  backarrow: {
    width: RfW(24),
    height: RfH(24),
    // marginTop: 10,
    verticalAlign: 'middle',
  },
  containers: {
    flex: 1,
    marginLeft: 77,
    verticalAlign: 'middle',
  },
  line: {
    flexDirection: 'row',
    width: RfW(180),
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#FFE9F1',
    height: RfH(8),
  },
  part1: {
    width: RfW(121),
    backgroundColor: '#FF5069',
    borderRadius: 50,
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
    justifyContent: 'space-between',
    height: RfH(569),
    width: RfW(300),
    // marginTop: 41,
    marginBottom: 30,
  },
  button: {
    borderRadius: 10,
    height: RfH(51),
    width: RfW(319),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5069',
    // marginBottom:20
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.UextraBold,
    fontWeight: '700',
  },
  genderOption: {
    width: RfW(150),
    height: RfH(150),
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 48,
  },
  selected: {
    backgroundColor: '#FF5069',
  },
  unselected: {
    backgroundColor: '#F0E4E6',
  },
  genderText: {
    color: Colors.white,
  },
});

export default Gender;
