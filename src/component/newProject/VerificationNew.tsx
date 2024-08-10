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
// import {
//   useGenerateOtpMutation,
//   useVerifyOtpMutation,
// } from './redux/authService';

import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import Images from '../../themes/Images';
import LinearGradient from 'react-native-linear-gradient';
// import {isEmpty} from 'lodash';
const ONE_MINUTE_IN_SECONDS = 60;
const ONE_HOUR_IN_SECONDS = 3600;

const CountdownDisplay = ({durationInSeconds}: any) => {
  const hh = parseInt(durationInSeconds / ONE_HOUR_IN_SECONDS, 10);
  const mm = parseInt(
    (durationInSeconds / ONE_MINUTE_IN_SECONDS) % ONE_MINUTE_IN_SECONDS,
    10,
  );
  const ss = parseInt(durationInSeconds % ONE_MINUTE_IN_SECONDS, 10);
  // const paddedHH = hh < 10 ? `0${hh}` : `${hh}`;
  const paddedMM = mm < 10 ? `0${mm}` : `${mm}`;
  const paddedSS = ss < 10 ? `0${ss}` : `${ss}`;

  return (
    <Text style={{paddingRight: 10}}>
      {paddedMM}:{paddedSS}
    </Text>
  );
};

const AuthVerify = ({navigation, route}: {route: any; navigation: any}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [durationInSeconds, setDurationInSeconds] = useState(-1);
  // ---------------------------

  // const inputs = useRef<Array<any>>([]);
  // const [
  //   generateOtp,
  //   {data: data2, isLoading: isLoading2, isError2, error2, isSuccess2},
  // ] = useGenerateOtpMutation();
  // // --------------------------------
  // const [verifyOtp, {isLoading: isLoading, isError, error}] =
  //   useVerifyOtpMutation();
  // const {mobileNumber, data} = route.params;
  // console.log('data vvvv', JSON.stringify(data));
  // {mobile: mobileNumber, otp: localOtp, firstName, lastName}
  // const mobileNumber = '';
  // const [error, setError] = useState('');
  console.log({durationInSeconds});

  React.useEffect(() => {
    if (isTimerStarted && durationInSeconds === 0) {
      setIsTimerStarted(false);
    } else if (isTimerStarted && durationInSeconds > 0) {
      const intervalId = setInterval(() => {
        setDurationInSeconds(prev => prev - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [durationInSeconds, isTimerStarted]);
  function handleStart() {
    const hh = 0;
    const mm = 1;
    const ss = 0;
    const initDuration =
      ss + ONE_MINUTE_IN_SECONDS * mm + ONE_HOUR_IN_SECONDS * hh;

    setDurationInSeconds(initDuration);
    if (initDuration > 0) setIsTimerStarted(true);
  }
  useEffect(() => {
    handleStart();
  }, []);
  const handleRequestOtp = async () => {
    if (!mobileNumber.match(/^\d{10}$/)) {
      Alert.alert(
        'Validation Error',
        'Please enter a valid 10-digit mobile number',
      );
      return;
    }
    await generateOtp(mobileNumber);
    handleStart();
  };
  // useEffect(() => {
  //   if (!isEmpty(data) && data?.data) {
  //     setFirstName(data?.data?.first_name);
  //     setLastName(data?.data?.last_name);
  //   }
  // }, [data]);

  const handleVerifyOtp = async ({navigation}:any) => {
    navigation.navigate('Details')
    const localOtp: string = otp.join('');
    if (!otp || !/^\d{4}$/.test(localOtp)) {
      Alert.alert('Validation Error', 'Please enter a valid 4-digit OTP');
      return;
    }
    const res = await verifyOtp({
      mobile: mobilenumber,
      otp: localOtp,
      first_name: firstName,
      last_name: lastName,
    });

    if (res.data.error) {
      Alert.alert('Error', res.data?.msg);
    }
  
  };

  // if (isError) {
  //   Alert.alert('Someting went wrong');
  //   console.log(JSON.stringify(error, null, 2));
  // }
  // if (isLoading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  // ---------------------------------New Code for otp fields
  const handleChange = (text: string, index: number) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if a number is entered
    if (text && index < 3) {
      // inputs.current[index + 1].focus();
    }
  };

  return (
 
      <LinearGradient colors={['#FFFF', 'pink', Colors.appcolor]} style={[styles.linearGradient,styles.container]}>
      {/* <LinearGradient></LinearGradient> */}
      <View style={{marginVertical: RfH(25), marginHorizontal: RfW(25)}}>
        <TouchableOpacity onPress={() => navigation.navigate('mytabs')}>
          <Image style={styles.imageSize12} source={Images.fistImg} />
        </TouchableOpacity>
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

        {/* <View style={styles.otpContainer12}>
          <TextInput
            style={styles.otpInput12}
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            placeholder="e.g. 1234"
          />
----------------------------------old code

        <TextInput
            style={styles.otpInput}
            value={otp.join('')}
            // onChangeText={setOtp}
            onChangeText={(text: string) => setOtp([...text])}
            keyboardType="numeric"
            placeholder="e.g. 1234"
          />
        </View> */}

        {/* ------------------------------- New UI for Otp field*/}
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              // ref={el => (inputs.current[index] = el)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={text => handleChange(text, index)}
              value={value}
            />
          ))}
        </View>

        <View style={{marginTop: RfH(30)}}>
          <TouchableOpacity onPress={()=>navigation.navigate('mytabs')}>
            <View style={styles.button}>
              <Text style={styles.btnText}>Verify</Text>
            </View>
          </TouchableOpacity>
          {/* {loading && <Text style={styles.loading}>Verifying OTP...</Text>}
          {error && <Text style={styles.error}>{error}</Text>} */}
         
        <View style={{marginVertical: RfH(20),flexDirection:'row'}}>
            <Text>Didn’t receive OTP?</Text>
            <View style={styles.headerResendText}>
          {isTimerStarted ? (
            <CountdownDisplay durationInSeconds={durationInSeconds} />
          ) : (
            <TouchableOpacity
              onPress={handleRequestOtp}
              disabled={isTimerStarted}>
              <Text style={styles.resendText}>
                <Text style={{color: Colors.lightGreen}}>Resend </Text>code in
                +91 {''}
              </Text>
            </TouchableOpacity>
          )}
        </View>

          </View>
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
    width: '100%',
  },
  otpInput: {
    // borderBottomWidth: ,
    // borderColor: Colors.tooLightGreen,
    backgroundColor: Colors.white,
    fontSize: responsiveFontSize(24),
    textAlign: 'center',
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
  txtstyle2: {
    fontSize: responsiveFontSize(14),
    // marginBottom: RfH(0),
    marginTop: RfH(5),
    fontFamily: Fonts.UextraBold,
    // fontWeight: '900',
    color: Colors.black,
    // textShadowColor: Colors.textShadow, // Shadow color
    // textShadowOffset: {width: 1, height: 1}, // Shadow offset
    textShadowRadius: 2,
  },
  textInput: {
    marginTop: RfH(18),
    flexDirection: 'row',
    width: '48%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.shadowColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    elevation: 0.5,
    fontSize: responsiveFontSize(15),
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
  },
  otpContainer12: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  otpInput12: {
    width: '97%',
    height: 60,
    borderColor: Colors.tooLightGreen,
    backgroundColor: Colors.tooLightGreen,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: responsiveFontSize(18),
    marginHorizontal: RfW(5),
  },
});

export default AuthVerify;
