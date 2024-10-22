import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../themes/Colors';
import {responsiveFontSize, RfH, RfW} from '../../utils/helpers';

// Define prop types
interface CustomButtonProps {
  submitFunction: () => void;
  buttonText?: any;
  style?: object;
  containerStyling?: object;
  activityIndicatorColor?: string; 
  displayLoader?: boolean;
  tintColor?: string;
  navigation: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  submitFunction,
  buttonText = 'Submit',
  style = {},
  containerStyling = {},
  activityIndicatorColor = Colors.appcolor,
  displayLoader = false,
  tintColor,
  navigation 

}) => {
  return (
    <View style={{flex: 1, ...containerStyling}}>
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={displayLoader}
        onPress={submitFunction}
        style={[styles.button,style]}
      >
        {displayLoader ? (
          <ActivityIndicator color={activityIndicatorColor} />
        ) : (
          <Text style={{color: Colors.white, fontSize: responsiveFontSize(15)}}>
            {buttonText}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  footerButton: {
    borderWidth: 1,
    borderColor: Colors.appcolor,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: Colors.appcolor,
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
});
