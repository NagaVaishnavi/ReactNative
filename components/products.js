import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import axios from 'axios'

import { globalstyles } from "../globalstyles/globalstyles";
import { useIsFocused } from '@react-navigation/native';



export default function ProductComponent({navigation}){
// [stateName, function-Who-Will-Change-This-State] = useState('intialValue')

   const focussed = useIsFocused ()                           
 const [users, setUsers] = useState([])
const[searchList, setSearchList] = useState([])

const getAllProducts=()=>{
 
    axios.get(' http://localhost:3000/allproducts1')
          .then(res =>{
            // console.log(res.data)
            setUsers(res.data);
            setSearchList(res.data)
          })
  }
  useEffect(()=>{
    getAllProducts()
                                          
},[focussed])

  const searchValue=(value)=>{
    let searchV = searchList.filter(s=>{
     return s.Product_Name.toLowerCase().match(value.toLowerCase().trim()) 
    
    })
    setUsers(searchV)
 }
  

  return (
    <View>
    <TextInput
    keyboardType={"text"}
    style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginTop:'2%',width:'15%',marginLeft:'43%' }}
    placeholder="Search"
    placeholderTextColor="#003f5c"
    onChangeText={searchValue}
/>


    <View style={mystyles.maincontainer}>
       
       
        <ScrollView>
          
        {
        users.map(user =>{
            return (
              <View key={user.id}>
          
                <TouchableOpacity onPress={()=>{navigation.navigate(name='ProductDetails', {item: user})}} >
                  <Text style={mystyles.listitem}>{user.Product_Name}</Text>
                 
                </TouchableOpacity>
                
              </View>
            )
           
         
          
          })
        }
      </ScrollView>
      <br></br>
      <TouchableOpacity style={globalstyles.touchButtonContainer}
                              onPress={()=>{navigation.navigate('AddProduct')}}      >
                <Text>Add Product
                </Text>
            </TouchableOpacity>
     
    </View>
    </View>
  )
}

const mystyles = StyleSheet.create({
  maincontainer:{
  
    flex:1,
    //alignItems:'center',
    //justifyContent:'center'
  },
  listitem:{
    marginTop:20,
    fontSize:30,
    backgroundColor:'lightgrey',
    padding:20,
    color:'purple',
    textAlign:'center',
  
    // marginLeft:40,
    // height:80
  }
})