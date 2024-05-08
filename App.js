import React, { useState, useEffect, useTransition } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import AppNavigator from "./src/mainNavigator"
import SplashScreen from 'react-native-splash-screen';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


const screeneviceHeight = Dimensions.get("screen").height;
const screenDeviceWidth = Dimensions.get("screen").width;


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <SafeAreaView style={{
      height: deviceHeight,
      width: deviceWidth,
      backgroundColor: '#000'
    }}>
      <AppNavigator />
    </SafeAreaView>
  );
};
export default App;
