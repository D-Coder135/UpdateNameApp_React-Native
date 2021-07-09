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
        Using Functional Component.
      </Text>

      <Card>
        <UpdateName />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});