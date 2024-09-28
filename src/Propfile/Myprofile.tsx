import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RfH, RfW } from '../utils/helpers';
import Images from '../themes/Images';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { launchCamera, launchImageLibrary, ImagePickerResponse, Asset } from 'react-native-image-picker';
import { useSelector } from 'react-redux';

interface ImagePickerResult extends ImagePickerResponse {
  assets?: Asset[];
}
const MyProfile = () => {
  const [imgUrl, setImgUrl] = useState<string>('https://source.unsplash.com/random/400x300');
//   const userdata = useSelector((state: any) => state.user);

  // Function to open the camera and handle image picking
  const openCamera = async () => {
    console.log('Camera Pressed');
    const result: ImagePickerResult = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    });

    console.log('Camera Result:', result);

    if (result.assets && result.assets.length > 0) {
      setImgUrl(result.assets[0].uri || imgUrl);
    }
  };

  // Function to open the image library and handle image picking
  const openAlbum = async () => {
    console.log('Album Pressed');
    const result: ImagePickerResult = await launchImageLibrary({
      mediaType: 'photo',
    });

    console.log('Album Result:', result);

    if (result.assets && result.assets.length > 0) {
      setImgUrl(result.assets[0].uri || imgUrl);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.headerstyle}>
          <Image style={styles.headerImg} source={Images.menu} />
          <Image style={styles.headerImg} source={Images.bell} />
        </View>
      </View>
      <View style={styles.profile}>
        <TouchableOpacity onPress={openCamera}>
          <Image style={styles.profileImg} source={{ uri: imgUrl }} />
        </TouchableOpacity>
        <Text style={{ fontWeight: '600', fontSize: 20, marginTop: 20 }}>Hi, Alia</Text>
        <Text style={{ fontWeight: '400', fontSize: 14, marginTop: 5 }}>youremail@domain.com | +09 234 567 89</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.txtstyle}>Edit Profile Information</Text>
        <Text style={styles.txtstyle}>Notifications</Text>
        <Text style={styles.txtstyle}>Language</Text>
        <Text style={styles.txtstyle}>Security</Text>
        <Text style={styles.txtstyle}>Help & Support</Text>
        <Text style={styles.txtstyle}>Contact Us</Text>
        <Text style={styles.txtstyle}>Privacy & Policy</Text>
      </View>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headercontainer: {
    height: RfH(141),
    width: RfW(375),
    backgroundColor: '#FF5069',
  },
  headerstyle: {
    marginTop: 10,
    height: 18,
    width: 335,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  headerImg: {
    width: 18,
    height: 18,
  },
  profile: {
    height: RfH(184),
    width: RfW(287),
    alignItems: 'center',
    marginTop: -60,
  },
  profileImg: {
    height: RfH(120),
    width: RfW(120),
    borderRadius: 60, // Optional: Adding border radius to make the image circular
  },
  footer: {
    marginTop: 40,
    backgroundColor: Colors.White,
    height: RfH(234),
    width: RfW(342),
    gap: 10,
  },
  txtstyle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginLeft: 17,
  },
});

// Export the component
export default MyProfile;
