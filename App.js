import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import {Card} from 'react-native-paper';
import UpdateName from './components/UpdateName';

export default function App() {
  return(
    <View style = {styles.container}>
      <Text style = {styles.paragraph}>
        Update Name Data =>
      </Text>
      <Text style = {styles.paragraph}>
        Update Name Data =>
      </Text>
    </View>
  );
}