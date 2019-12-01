/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ItemsList from './ItemsList'
import { styles } from './styles'


const App: () => React$Node = () => {
  const object = {
    name: "Alex", age: 30, city: "TLV", hobbis: ["reading", "sport", "movies"]
  }
  return (
    <>
      <SafeAreaView style={ styles.container }>
        <Text style={ styles.header }> View Objects </Text>
        <ItemsList  object={ object }/>
      </SafeAreaView>
    </>
  );
};



export default App;
