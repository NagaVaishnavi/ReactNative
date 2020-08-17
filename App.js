
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App(){
 
  return (
   <View style={mystyles.maincontainer}>
     <View style={mystyles.header}>
       <Text style={mystyles.textFormat}>React Native</Text>
     </View>
    <View style={mystyles.content}>
      <Text>Lorem ipsum lodor</Text>
      <Text>Lorem ipsum lodor</Text>
      <Text>Lorem ipsum lodor</Text>
    </View>
   </View> 
  )
}

const mystyles = StyleSheet.create({
  maincontainer:{
    backgroundColor:'pink',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  header:{
    backgroundColor:'lightgrey',
    padding:20,
    width:200,
    alignItems:'center',
    justifyContent:'center'
  },

textFormat:{
color:'blue',
fontWeight:'bold',
},
content:{
  backgroundColor:'coral',
padding:20
}
})

