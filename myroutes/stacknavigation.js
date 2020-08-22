import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import ProductComponent from "../components/products";

import { NavigationContainer } from "@react-navigation/native";
import AddProductComponent from '../components/addproduct';

const Stack = createStackNavigator()


function MyStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Products' 
                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    backgroundColor:'wheat',
                                    height:50
                                }
                                }} 
                                headerMode='float'>
               
                <Stack.Screen name="Products" component={ProductComponent}></Stack.Screen>
                <Stack.Screen name="AddProduct" component={AddProductComponent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator