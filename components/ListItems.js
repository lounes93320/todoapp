import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
export default function ListItems(props) {
return (
<View>
<FlatList
data={props.listItems}
renderItem={({ item }) => (
<View style={{alignItems : 'center'}}>
<TouchableOpacity
style={{
padding: 15,
backgroundColor: '#f8f8f8',
borderBottomWidth: 1,
borderColor: '#eee',
width: 180,
marginTop: 5,
borderRadius : 10,
justifyContent: 'space-between',
flexDirection: 'row',
display: 'flex',}}>
<Text> {item.task}</Text>
<TouchableOpacity onPress={() => {
props.deleteItem(item.id);}}>

<Feather name="delete" size={24} color="black" />
</TouchableOpacity>

</TouchableOpacity>
</View>)}
></FlatList>
</View>);}