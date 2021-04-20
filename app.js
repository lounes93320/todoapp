import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AddItem from './components/AddItem';
import ListItems from  './components/ListItems';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
const [list, setList] = useState([]);
const addItem = (text) => {
const newItem = {
id: uuidv4(),
task: text,
};
setList([newItem, ...list]);
};
const DeleteItem = (id) => {
const newList = list.filter((item) => item.id !== id);
setList(newList);
};
return (
<View style={styles.container}>
    <View style={{alignItems : 'center'}}>
<Text style={styles.Title}>Todo List</Text>
    </View>

<View style={styles.header}></View>
<AddItem addItem={addItem}></AddItem>
<ListItems deleteItem={DeleteItem} listItems={list}></ListItems>
<StatusBar style="auto" />
</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
alignItems: 'bottom',
justifyContent: 'bottom',
fontSize: 30,
fontWeight: "bold"
},
Title : {
    color : 'white',
    fontSize : 30,
    fontWeight: "bold"
}
});