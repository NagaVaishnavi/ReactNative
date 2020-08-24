import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import ProductComponent from "../components/products";

import { NavigationContainer } from "@react-navigation/native";
import AddProductComponent from '../components/addproduct';
import ProductDetailsComponent from '../components/productdetails';
import EditProductComponent from '../components/editproduct';

const Stack = createStackNavigator()


function MyStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Products' 
                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    backgroundColor:'lightblue',
                                    height:50
                                }
                                }} 
                                headerMode='float'>
               
                <Stack.Screen name="Products" component={ProductComponent}></Stack.Screen>
                <Stack.Screen name="AddProduct" component={AddProductComponent}></Stack.Screen>
                <Stack.Screen name="EditProduct" component={EditProductComponent}></Stack.Screen>
                <Stack.Screen name="ProductDetails" component={ProductDetailsComponent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator