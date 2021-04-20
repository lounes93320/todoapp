import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
export default function addItem(props) {
const [item, setItem] = useState('');
return (
<View>
<TextInput
placeholder='Entrer une tâche'
onChangeText={(textVal) => {
setItem(textVal);}}
style={{
borderBottomColor: 'black',
backgroundColor: '#f4f4f4',
height : 50,
margin: 5,
marginBottom : 10,
borderRadius : 10
}}
></TextInput>
{/* <Button
style={{
    marginTop : 10
}}
onPress={() => {
props.addItem(item);
}}
title="+"
></Button> */}

<TouchableOpacity style = {styles.Button} onPress={() => {
props.addItem(item);
}}>
<FontAwesome5 name="calendar-plus" size={24} color="white" />
</TouchableOpacity>



</View>);}


const styles = StyleSheet.create({
    Button : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 10
    }
})