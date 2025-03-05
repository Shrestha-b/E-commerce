import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';
import Images from '../themes/Images';
import {RfH, RfW} from '../utils/helpers';
import CustomAgreement from '../comonents/CustomAgreement';

interface ImagePickerResult extends ImagePickerResponse {
  assets?: Asset[];
}

const MyProfile = () => {
  const [imgUrl, setImgUrl] = useState<string | null | any>(null);
  const [valueImg, setValueImg] = useState<string | null>(null);

  // Store image URL as a string
  const storeData = async (url: string) => {
    try {
      await AsyncStorage.setItem('Image', url);
      console.log('Image URL saved:', url);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Retrieve image URL and ensure it is a string
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Image');
      if (value) {
        console.log('Retrieved Data:', value);
        setValueImg(value); // Ensure valueImg is always a string
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  // Open Camera and store image URL
  const openCamera = async () => {
    console.log('Camera Pressed');
    const result: ImagePickerResult = await launchCamera({
      mediaType: 'photo',
      saveToPhotos: true,
    });

    if (result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri || imgUrl;
      setImgUrl(imageUri);
      await storeData(imageUri);
    }
  };

  // Open Image Library and store image URL
  const openAlbum = async () => {
    console.log('Album Pressed');
    const result: ImagePickerResult = await launchImageLibrary({
      mediaType: 'photo',
    });

    if (result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri || imgUrl;
      setImgUrl(imageUri);
      await storeData(imageUri);
    }
  };

  // Function to handle camera and album selection
  const handleCameraData = async () => {
    await openCamera();
    await openAlbum();
  };

  // Load stored image URL when component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <View style={styles.headerstyle}>
          <Text>{'Header'}</Text>
        </View>
      </View>

      {valueImg ? (
        <Image source={{uri: valueImg}} style={styles.profileImg} />
      ) : (
        <Text>{'No image found'}</Text>
      )}

      <View style={styles.profile}>
        <TouchableOpacity onPress={handleCameraData}>
          {imgUrl ? (
            <Image style={styles.profileImg} source={{uri: imgUrl}} />
          ) : (
            // <Text style={{fontSize: 30}}>please add image</Text>
            <Image style={styles.profileImg} source={Images.editlogo} />
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={getData}>
          <Text style={{fontWeight: '600', fontSize: 20, marginTop: 20}}>
            Hi, Alia
          </Text>
        </TouchableOpacity>

        <Text style={{fontWeight: '400', fontSize: 14, marginTop: 5}}>
          {'youremail@domain.com | +09 234 567 89'}
        </Text>
      </View>

      <View style={styles.footer}>
        <CustomAgreement
          Aggreement="Edit Profile Information"
          Name=''
        />
        <CustomAgreement Aggreement="Notifications" Name='' />
        <CustomAgreement Aggreement="Language" Name='' />
        <CustomAgreement Aggreement="Security" Name='' />
        <CustomAgreement Name='' Aggreement="Help & Support" />
        <CustomAgreement Name='' Aggreement="Contact Us" />
        <CustomAgreement
          Name='age'
          Aggreement="Privacy & Policy"
        />
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
    height: 100,
    width: '100%',
    backgroundColor: '#FF5069',
  },
  headerstyle: {
    marginTop: 10,
    height: 18,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  profile: {
    height: 184,
    width: 287,
    alignItems: 'center',
    marginTop: -60,
  },
  profileImg: {
    height: 120,
    width: 120,
    borderRadius: 60, // Optional: Adding border radius to make the image circular
  },
  footer: {
    marginTop: 40,
    backgroundColor: 'white',
    height: RfH(234),
    width: RfW(342),
  },
  txtstyle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginLeft: 17,
  },
});

export default MyProfile;
