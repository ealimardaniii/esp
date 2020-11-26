import NetInfo from '@react-native-community/netinfo';
import {ToastAndroid} from 'react-native';
const URL = 'https://www.omdbapi.com/?apikey=e0fbd801&';
const isOffline = async () => {
  const {isConnected} = await NetInfo.fetch();
  return isConnected;
};

const get = async (url) => {
  if (await isOffline()) {
    try {
      let response = await fetch(URL + url, {
        method: 'GET',
      });
      const json = await response.json();
      return json;
    } catch (error) {
      ToastAndroid.show('Error Occured', ToastAndroid.SHORT);
    }
  } else {
    ToastAndroid.show(
      'Please check your internet connection',
      ToastAndroid.SHORT,
    );
  }
};

export {get};
