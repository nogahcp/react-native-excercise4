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
    Name: "Alex", Age: 30, City: "TLV", Hobbis: ["reading", "sport", "movies"]
  }
  return (
    <>
      <SafeAreaView style={ styles.container }>
        <ItemsList  object={ object }/>
      </SafeAreaView>
    </>
  );
};



export default App;
