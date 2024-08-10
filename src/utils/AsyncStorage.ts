import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncStorageUtils {
  constructor() {}
  static async getData(key: string) {
    return await AsyncStorage.getItem(key);
  }
  static async setData(key: string, data: any) {
    return await AsyncStorage.setItem(key, data);
  }
  static async cleanData() {
    return await AsyncStorage.clear();
  }
}
