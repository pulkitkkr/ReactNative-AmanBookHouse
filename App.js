
import React, { Component } from 'react';
import {View} from 'react-native';
import MainAndroidApp from './App-Android/Main.js';
class App extends Component{
  render(){
    return(
      <View>
        <MainAndroidApp />
      </View>
    )
  }
}

export default App;
