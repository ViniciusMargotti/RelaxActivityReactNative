/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { View } from 'react-native';

import Storage from '@modules/services/storage';

const Auth = (props) => {
  useEffect(() => {
    const load = async () => {
      const userToken = await Storage.getItem('access_token');

      const isUserLoggedIn = userToken;

      const { navigate } = props.navigation;
      if (isUserLoggedIn) {
        navigate('Home');
      } else {
        navigate('Welcome');
      }
    };
    load();
  }, []);
  return <View />;
};

export default Auth;
