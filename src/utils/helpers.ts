import {Alert, Dimensions} from 'react-native';
import {isEmpty, isNumber} from 'lodash';
import {STANDARD_SCREEN_SIZE} from './constants';
import dayjs from 'dayjs';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const dim = Dimensions.get('window');

export const SCREEN_HEIGHT = dim.height;
export const SCREEN_WIDTH = dim.width;

const STANDARD_SCREEN_DIMENSIONS = {height: 812, width: 375};

export const RfW = (value: number) => {
  // return (SCREEN_WIDTH / 100) * value;
  return SCREEN_WIDTH * (value / STANDARD_SCREEN_DIMENSIONS.width);
};

export const RfH = (value: number) => {
  // return (SCREEN_HEIGHT / 100) * value;
  return SCREEN_HEIGHT * (value / STANDARD_SCREEN_DIMENSIONS.height);
};
//Responsive fontSize
export const responsiveFontSize = (size: number) => {
  let scaleFactor = SCREEN_HEIGHT / STANDARD_SCREEN_SIZE; // 390 is a standard width for reference
  if (scaleFactor < 1) {
    return size;
  } else {
    return size * scaleFactor;
  }
  // return RFValue(size, STANDARD_SCREEN_SIZE);
};
export const getColorWithOpacity = (color: string, opacity: number = 1) => {
  // Convert color to Color object
  const colorObject = Colors(color);

  // Ensure the color is in RGBA format
  const rgbaColor = colorObject.rgb().alpha(opacity).toString();

  return rgbaColor;
};
export const capitalizeFirstLetter = (text: string) => {
  try {
    return text.charAt(0).toUpperCase() + text.slice(1);
  } catch (error) {
    return text;
  }
};

export const alertBox = (
  alertTitle = '',
  alertMsg = '',
  config = {
    positiveText: 'OK',
    cancelable: true,
  },
) => {
  let configuration: any[] | undefined = [];
  if (!isEmpty(config.positiveText)) {
    configuration = [
      {
        text: config.positiveText, // Key to show string like "Ok" etc. i.e. positive response text
        onPress: config.onPositiveClick, // Key that contains function that executes on click of above text button
      },
    ];
  }
  if (config.middleText && !isEmpty(config.middleText)) {
    configuration = [
      ...configuration,
      {
        text: config.middleText, // Key to show string like "Cancel" etc. i.e. negative response text
        onPress: config.onMiddleClick, // Key that contains function that executes on click of above text button
      },
    ];
  }
  if (config.negativeText && !isEmpty(config.negativeText)) {
    configuration = [
      ...configuration,
      {
        text: config.negativeText, // Key to show string like "Cancel" etc. i.e. negative response text
        onPress: config.onNegativeClick, // Key that contains function that executes on click of above text button
        style: 'destructive',
      },
    ];
  }
  Alert.alert(alertTitle, alertMsg, configuration, {
    cancelable: config.cancelable,
  });
};
export const getImageSource = (imagePath: any) =>
  isNumber(imagePath) ? imagePath : {uri: imagePath};
export const formatDate = (
  date: string | number | dayjs.Dayjs | Date | null | undefined,
  format = 'DD/MM/YYYY',
) => {
  return dayjs(date).format(format);
};
