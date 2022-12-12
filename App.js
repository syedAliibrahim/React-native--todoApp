import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

import rtodo from './assets/rtodo.png'

function App(){
 const [list,setList] =useState([])
 const [text,setText] = useState('')

 let add=()=>{
  console.log("add function start")
  setList([...list,text])
 }
 let del =(i)=>{
  console.log(i);
  list.splice(i,1)
  setList([...list])
 };
  return (
    <>
    <View style={styles.container} >

      <View><Image source={rtodo} style={{width:50,height:50}}/></View>
      <Text style={styles.heading}>Todo App</Text>
      {/* <Text>{a}</Text> */}
      <View style={{flexDirection:'row'}}>
       <TextInput 
         onChangeText={(e)=>setText(e)}
         placeholder='enter Todo'
         style={[styles.input,{flex:4}]}
         />
        <Button title='Add' onPress={add} color='orange'/>
       </View>
       <Text>{text}</Text>
       {list.map((x,i)=>(
        <View key={i}>
           <Text style={{color:'red',fontSize:35}}>{x}</Text>
           {/* <Button title='Delete' color='black' onPress={() => del(e)}/> */}
           <TouchableOpacity onPress={() => del(e)}>
            <Image style={{width:30,height:30}} source={{uri:'https://toppng.com//public/uploads/preview/recycling-bin-vector-delete-icon-png-black-11563002079w1isxqyyiv.png'}}/>
           </TouchableOpacity>
        </View>
        ))}
        </View>
    </>
    )
}

export default App

const styles =StyleSheet.create({
  container:{
    padding:40,
    // marginVertical:30,
    // marginHorizontal:30
    backgroundColor: 'darkgrey',
    height:'100%',
  },
  heading:{
    fontSize:35,
    textAlign:'center',
    borderBottomWidth:2,
    borderBottomColor:'black',
  },
  input:{
    width: '100%',
    padding:10,
    fontSize:20,
    borderWidth:2,
    backgroundColor:"white",
    marginVertical:10
  }
})