import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { View, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import SplashIcon from '../../../assets/html/index.json';
import SplashHTML from '../../../assets/html/splash_screen.html';

// const SplashHTML = require('../../../assets/html/splash_screen.html');

const SplashScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    // <View>
    <RenderHtml contentWidth={width} source={{ html: `${SplashHTML}` }} />
    // </View>
  );
};

export default SplashScreen;
