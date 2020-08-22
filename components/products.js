import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'

import { globalstyles } from "../globalstyles/globalstyles";



export default function ProductComponent({navigation}){
// [stateName, function-Who-Will-Change-This-State] = useState('intialValue')

                               
 const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get(' http://localhost:3000/allproducts')
          .then(res =>{
            console.log(res.data)
            setUsers(res.data)
          })
  })                                      


  

  return (
    <View style={mystyles.maincontainer}>
       
       
        <ScrollView>
        {
          users.map(user =>{
            return (
              <View key={user.id}>
                <TouchableOpacity onPress={()=>{console.log(user.Product_Name)}}>
                  <Text style={mystyles.listitem}>{user.Product_Name}</Text>
                </TouchableOpacity>
                
              </View>
            )
          })
        }
      </ScrollView>
 
      <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('AddProduct')}}      >
                <Text>Add Product
                </Text>
            </TouchableOpacity>
    </View>
   
  )
}

const mystyles = StyleSheet.create({
  maincontainer:{
    backgroundColor:'pink',
    flex:1,
    //alignItems:'center',
    //justifyContent:'center'
  },
  listitem:{
    marginTop:20,
    fontSize:30,
    backgroundColor:'goldenrod',
    padding:20,
    color:'purple'
  }
})