import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  async addToArrayItem(key, value) {
    const data = await this.getItem(key);

    data.push(value);

    await this.setItem(key, data);
  }

  async addToObjectItem(key, value) {
    let data = await this.getItem(key);

    data = {
      ...data,
      ...value
    };

    await this.setItem(key, data);
  }

  async setItem(key, value) {
    const data = JSON.stringify(value);
    await AsyncStorage.setItem(key, data);
  }

  async getItem(key) {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  }

  removeItem(key) {
    return AsyncStorage.removeItem(key);
  }

  multiRemove(keys) {
    return AsyncStorage.multiRemove(keys);
  }
}

export default new Storage();
