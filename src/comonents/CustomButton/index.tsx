import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Colors from '../../themes/Colors';
import PropTypes from 'prop-types';
import {responsiveFontSize} from '../../utils/helpers';

function CustomButton(props) {
  const {
    submitFunction,
    buttonText,
    style,
    containerStyling,
    activityIndicatorColor,
    displayLoader,
    tintColor,
  } = props;

  return (
    <View style={{}}>
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={displayLoader}
        onPress={() => {
          submitFunction();
        }}>
        <View style={styles.footerButton}>
          {displayLoader ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{color: Colors.white, fontSize: responsiveFontSize(15)}}>
              {buttonText}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

CustomButton.propTypes = {
  backgroundColor: PropTypes.string,
  containerStyling: PropTypes.object,
  style: PropTypes.any,
  submitFunction: PropTypes.func,
  activityIndicatorColor: PropTypes.any,
  displayLoader: PropTypes.bool,
  buttonText: PropTypes.string,
};

CustomButton.defaultProps = {
  backgroundColor: '#000000',
  style: {},
  containerStyling: {},
  submitFunction: null,
  displayLoader: true,
  buttonText: 'Submit',
  activityIndicatorColor: Colors.appcolor,
};

export default CustomButton;
const styles = StyleSheet.create({
  selectImg: {width: 25, height: 25, tintColor: Colors.grapAppColor},

  // -----------------footerButton
  footerButton: {
    borderWidth: 1,
    borderColor: Colors.appcolor,
    borderRadius: 40,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: Colors.appcolor,
  },
});
