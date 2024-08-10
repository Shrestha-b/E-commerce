import { StyleSheet } from 'react-native';

const getIconImageStyle = (iconHeight, iconWidth, backgroundColor) => ({
  height: iconHeight,
  width: iconWidth,
  backgroundColor,
  resizeMode: 'contain'
});

const styles = StyleSheet.create({
  loaderImg: { height: 15, width: 15 }
});

export { getIconImageStyle };
