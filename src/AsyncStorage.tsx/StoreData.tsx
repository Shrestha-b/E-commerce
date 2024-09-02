import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from "react-native"
const StoreData = ({navigation}:any) => {

const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.error('Failed to save data:', e);
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.error('Failed to fetch data:', e);
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to remove data:', e);
  }
}

return(
    <View></View>

)
}

export default StoreData