import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RfH, RfW, responsiveFontSize} from '../../utils/helpers';
import Fonts from '../../themes/Fonts';
import PhoneInput from 'react-native-phone-number-input';
import axios from "axios";

interface product{
  name: 'string',
  email: any
}


const MainLogin: React.FC = ({navigation}: any) => {
  const [isSelected, setSelection] = useState(false);
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [Isloding, setLoading] = useState(true);

  const [Response,setResponse] = useState('')
  const phoneInput = useRef<PhoneInput>(null);
  

  //  navigation.navigate('horverificationnew'),
  const handlePostData = async() => {
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        name,
        email,
      });

      setResponse(res.data); // Store response data
      Alert.alert("Success", "Data submitted successfully!");
    } catch (error) {
      console.error("Error posting data:", error);
      Alert.alert("Error", "Failed to submit data.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainFlex}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.txt1}>
          We'll need your phone number to send an {'\n'}OTP for verification.
        </Text>
        <TextInput
          value={name}
          onChangeText={setname}
          placeholder="Enter your name"
          style={styles.inputStyle}
        />
        <TextInput
          value={mobilenumber}
          onChangeText={setmobilenumber}
          placeholder="Enter your mobilenumber"
          style={styles.inputStyle}
        />
        <TextInput
          value={email}
          onChangeText={setemail}
          placeholder="Enter your name"
          style={styles.inputStyle}
        />
        {/* <PhoneInput
            ref={phoneInput}
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
          /> */}
        <Text style={styles.checkboxText}>
          {name}
          {/* Checkbox for Terms and Conditions, Privacy Policy hyperlink */}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePostData}>
          <Text style={styles.continue}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 56,
    width: 325,
    padding: 10,
    backgroundColor: Colors.white,
  },
  dropdownarrow: {
    height: 3.62,
    width: 7.5,
  },
  text91: {
    color: '#262626',
    fontFamily: Fonts.UfontBold,
    fontSize: responsiveFontSize(18),
  },
  divider: {
    fontSize: 25,
  },
  textInputStyle: {
    color: Colors.appcolor,
    fontFamily: Fonts.UfontBold,
    fontSize: responsiveFontSize(18),
    height: RfH(56),
    width: 220,
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 325,
    height: 56,
    justifyContent: 'space-around',
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  login: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    fontWeight: '700',
  },
  flagImage: {
    height: 35.6,
    width: 35.6,
    marginLeft: 1.68,
  },
  checkboxText: {
    marginTop: 15,
    fontSize: 10,
    color: Colors.gray,
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
    color: '#333333',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5069',
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
    height: RfH(392),
    width: RfW(325),
    gap: 30,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  inputStyle: {
    height: RfH(56),
    width: RfW(300),
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: Colors.white,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: Colors.black,
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

// export default MainLogin;
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const MainLogin = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verificationId, setVerificationId] = useState('');
//   const [code, setCode] = useState('');

//   // Function to send OTP
//   const sendOtp = async () => {
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setVerificationId(confirmation.verificationId);
//       alert('OTP sent to ' + phoneNumber);
//     } catch (error) {
//       console.error(error);
//       alert('Failed to send OTP');
//     }
//   };

//   // Function to verify OTP
//   const verifyOtp = async () => {
//     try {
//       const credential = auth.PhoneAuthProvider.credential(verificationId, code);
//       await auth().signInWithCredential(credential);
//       alert('Phone number verified successfully');
//     } catch (error) {
//       console.error(error);
//       alert('Invalid OTP');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Enter phone number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         keyboardType="phone-pad"
//       />
//       <Button title="Send OTP" onPress={sendOtp} />

//       <TextInput
//         placeholder="Enter OTP"
//         value={code}
//         onChangeText={setCode}
//         keyboardType="numeric"
//       />
//       <Button title="Verify OTP" onPress={verifyOtp} />
//     </View>
//   );
// };

// export default MainLogin;

// import React, { useState } from "react";
// import { View, Text, TextInput, Button, Alert, ActivityIndicator } from "react-native";
// import axios from "axios";

// const  MainLogin = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState(null);

//   const handlePostData = async () => {
//     if (!name || !email) {
//       Alert.alert("Error", "Please enter both name and email.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
//         name,
//         email,
//       });

//       setResponse(res.data); // Store response data
//       Alert.alert("Success", "Data submitted successfully!");
//     } catch (error) {
//       console.error("Error posting data:", error);
//       Alert.alert("Error", "Failed to submit data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 20, fontWeight: "bold" }}>POST API Example</Text>

//       <TextInput
//         placeholder="Enter Name"
//         value={name}
//         onChangeText={setName}
//         style={{ borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 }}
//       />

//       <TextInput
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={setEmail}
//         style={{ borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 }}
//       />

//       {loading ? (
//         <ActivityIndicator size="large" color="blue" />
//       ) : (
//         <Button title="Submit Data" onPress={handlePostData} />
//       )}

//       {response && (
//         <View style={{ marginTop: 20, padding: 10, backgroundColor: "#f0f0f0", borderRadius: 5 }}>
//           <Text style={{ fontWeight: "bold" }}>Response from Server:</Text>
//           <Text>{JSON.stringify(response, null, 2)}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// export default MainLogin;
