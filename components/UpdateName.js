import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function UpdateName() {
    return (
        <View style = {styles.container}>
            <Text>Previous Name:</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    }
  });