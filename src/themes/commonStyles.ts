import {Platform, StyleSheet} from 'react-native';
import {
  RfH,
  RfW,
  getColorWithOpacity,
  responsiveFontSize,
} from '../utils/helpers';

import Colors from './Colors';
import Fonts from './Fonts';

const commonStyles = StyleSheet.create({
  whiteCard: {
    backgroundColor: Colors.white,
    paddingHorizontal: RfH(19),
    paddingVertical: RfH(16),
    borderRadius: RfH(10),
    borderWidth: 1,
    borderColor: getColorWithOpacity(Colors.grey12, 0.05),
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default commonStyles;
