/* eslint-disable camelcase */
import React from 'react';
import {
  useFonts,
  ZillaSlab_300Light,
  ZillaSlab_300Light_Italic,
  ZillaSlab_400Regular,
  ZillaSlab_400Regular_Italic,
  ZillaSlab_500Medium,
  ZillaSlab_500Medium_Italic,
  ZillaSlab_600SemiBold,
  ZillaSlab_600SemiBold_Italic,
  ZillaSlab_700Bold,
  ZillaSlab_700Bold_Italic
} from '@expo-google-fonts/zilla-slab';
import AppContainer from './src/router';

export default function App() {
  useFonts({
    ZillaSlab_300Light,
    ZillaSlab_300Light_Italic,
    ZillaSlab_400Regular,
    ZillaSlab_400Regular_Italic,
    ZillaSlab_500Medium,
    ZillaSlab_500Medium_Italic,
    ZillaSlab_600SemiBold,
    ZillaSlab_600SemiBold_Italic,
    ZillaSlab_700Bold,
    ZillaSlab_700Bold_Italic
  });

  return <AppContainer />;
}
