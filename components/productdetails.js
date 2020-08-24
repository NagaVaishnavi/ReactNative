import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, Button, TouchableOpacity,FlatList } from 'react-native';
import { globalstyles } from '../globalstyles/globalstyles';
import Axios from "axios";

export default function ProductDetailsComponent(navigation) {
  console.log(navigation)
  
const detail =  navigation.route.params.item
console.log(detail)
console.log(detail.id)

const deleteHandler=(id)=>{
    console.log(id)
    Axios.delete('http://localhost:3000/allProducts1/'+id)
    .then(response=>{
      console.log(response.data)
      navigation.navigation.navigate('Products')
    })
  }

  const editHandler=(navigation)=>{
    console.log(navigation.route.params.item)
    console.log(detail.id)
    //console.log(navigation.navigation.navigate)
    navigation.navigation.navigate('EditProduct',{item:detail})
   
  }

return (
  <View>
    <View style={globalstyles.a1}>

      <Text><h1>Product_Name: {detail.Product_Name}</h1></Text>
      <Text><h1>Product_Category: {detail.Product_Category}</h1></Text>
      <Text><h1>Product_Quantity: {detail.Product_Quantity}</h1></Text>
      
      <Text><h1>Manufacturer: {detail.Manufacturer}</h1></Text>
      <Text><h1>Vendor: {detail.Vendor}</h1></Text>
      <Text><h1>Product_Price: {detail.Product_Price}</h1></Text> 
      <TouchableOpacity style={globalstyles.touchButtonContainer2}
                                onPress={()=>editHandler(navigation)}><Text>EDIT</Text></TouchableOpacity>
                
        
            <TouchableOpacity style={globalstyles.touchButtonContainer4} 
                             onPress={()=>deleteHandler(detail.id)} ><Text>Delete </Text>
            </TouchableOpacity>
            
    

       </View>
  </View>
 
   
  )
}