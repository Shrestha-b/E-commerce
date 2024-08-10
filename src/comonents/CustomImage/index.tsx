import {ActivityIndicator, Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {RfH, RfW, getImageSource} from '../../utils/helpers';

import Colors from '../../themes/Colors';
import Images from '../../themes/Images';
import KiteSquareBox from '../../container/orders/components/KiteSquareBox';
import PropTypes from 'prop-types';
import {TOUCHABLE_ACTIVE_OPACITY_VALUE} from '../../utils/constants';
import {getIconImageStyle} from './styles';
import {isNumber} from 'lodash';

function CustomImage(props) {
  const {
    submitFunction,
    image,
    imageHeight,
    style,
    imageResizeMode,
    imageWidth,
    placeHolderImage,
    containerStyling,
    activityIndicatorColor,
    displayLoader,
    tintColor,
  } = props;
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const imageObject = image ? getImageSource(image) : placeHolderImage;
  const sourceImage = isError ? getImageSource(placeHolderImage) : imageObject;
  return (
    <View style={{}}>
      <TouchableOpacity
        activeOpacity={TOUCHABLE_ACTIVE_OPACITY_VALUE}
        disabled={!submitFunction}
        onPress={submitFunction}
        style={[containerStyling, {}]}>
        {loading && displayLoader && (
          <View
            style={[
              {
                position: 'absolute',
                left: imageWidth / 2 - RfW(10),
                top: imageHeight / 2 - RfH(10),
              },
              style,
            ]}>
            {/* <KiteSquareBox /> */}
            <ActivityIndicator color={activityIndicatorColor} />
          </View>
        )}
        <Image
          source={sourceImage}
          onError={() => {
            setIsError(true);
            setLoading(false);
          }}
          onLoadStart={() => setLoading(isNumber(sourceImage) ? false : true)}
          onLoad={() => setLoading(false)}
          onLoadEnd={() => setLoading(false)}
          style={[
            getIconImageStyle(imageHeight, imageWidth),
            style,
            {
              resizeMode: imageResizeMode,
              ...(tintColor ? {tintColor: tintColor} : {}),
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

CustomImage.propTypes = {
  backgroundColor: PropTypes.string,
  containerStyling: PropTypes.object,
  imageHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.any,
  imageWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageResizeMode: PropTypes.string,
  placeHolderImage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.any,
  submitFunction: PropTypes.func,
  activityIndicatorColor: PropTypes.any,
  displayLoader: PropTypes.bool,
  tintColor: PropTypes.string,
};

CustomImage.defaultProps = {
  backgroundColor: '#000000',
  imageHeight: 50,
  imageWidth: 50,
  imageResizeMode: 'contain',
  style: {},
  containerStyling: {},
  submitFunction: null,
  placeHolderImage: Images.noImage,
  displayLoader: true,
  activityIndicatorColor: Colors.blue,
};

export default CustomImage;
