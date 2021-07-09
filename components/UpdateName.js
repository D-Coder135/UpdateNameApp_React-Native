import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function UpdateName() {

   var updatedName = ""

    const [name, updateName] = React.useState("");

    const updatingName = (newName) => {
         updatedName = newName;
    }

    const updateNameOnPress = () => {
        updateName(updatedName);
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.view}>
            <Text style = {{color: 'red', fontWeight: 'bold', fontSize: 18}}>Previous Name:</Text>
            </View>

            <View style = {styles.view}>
                <Text style = {{margin: 20, fontSize: 18, fontWeight: 'bold', color: 'green'}}>Updated Name: {name}</Text>
            </View>

            <TextInput style = {styles.inputText} onChangeText = {updatingName} ></TextInput>

            <Button title = 'Update Name' onPress = {updateNameOnPress}></Button>
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
    },
    view: {
        flexDirection: 'row',
    },
    inputText: {
        borderWidth: 1.5, backgroundColor: 'white', padding: 15, marginTop: 15, marginBottom: 20, borderRadius: 10, textAlign: 'center', fontSize: 20
      },
  });