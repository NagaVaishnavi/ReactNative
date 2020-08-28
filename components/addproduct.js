import React, { useState } from "react";
import { globalstyles } from "../globalstyles/globalstyles";
import { View, Text, TouchableOpacity, TextInput,Picker } from "react-native";
import Axios from "axios";

export default function AddProductComponent({ navigation }) {
    const [name, setname] = useState('');
    const [category, setCategory] = useState('');
    console.log(category)
    const [quantity, setQuantity] = useState('');
   const [manufacturer, setManufacturer] = useState('');
    const [vendor, setVendor] = useState('');
    const [price, setPrice] = useState('');
    let namevalue = (value) => {
        setname(value)
    }
    let manufacturerValue = (value) => {
        setManufacturer(value)
    }
    let vendorValue = (value) => {
        setVendor(value)
    
    }
    let priceValue = (value) => {
        setPrice(value)
    }
    let quantityValue = (value) => {
        setQuantity(value)
    }
    let categoryValue = (value) => {
        setCategory(value)
    }
    const submitHandler = (name,category,quantity,manufacturer,vendor,price,) => {
        let product = {
            Product_Name: name,
            Product_Category: category,
            Product_Quantity: quantity,
            Manufacturer: manufacturer,
            Vendor: vendor,
            Product_Price: price,
            
        }
        console.log(product)

        Axios.post('http://localhost:3000/allProducts1', product).then(response => {
            navigation.navigate('Products')
        })
    }
    return (
        <div>
        <div style={{width:'60%',  backgroundColor:"lightblue",padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '0px 0% 0px 18%'}}>
        <View>
            <View> 
            <Text style={globalstyles.textStyle}>Add Product</Text>
            <View>
                <TextInput
                  style={{ height: 40,borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Product Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={namevalue}
                />
            </View>
           
<br></br><br></br>
<View style={globalstyles.inputfriend} >
<Picker
                selectedValue={categoryValue}
                style={{ display:"flex",backgroundColor:"lightblue"}}
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            >
                <Picker.Item label="Mobile" itemValue="Mobile" />
                <Picker.Item label="Laptop" value="Laptop" />
                <Picker.Item label="Camera" value="Camera" />
                <Picker.Item label="Speaker" value="Speaker" />
                <Picker.Item label="Accesories" value="Accesories" />
                <Picker.Item label="Headphones" value="Headphones" />
            </Picker>
            </View>
            <br></br><br></br>
            <View>
                <TextInput
                    keyboardType={"numeric"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Quantity"
                    placeholderTextColor="#003f5c"
                    onChangeText={quantityValue}
                />
            </View>
            <br></br><br></br>
           
            <View style={globalstyles.inputView} >
                <TextInput
                    keyboardType={"text"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Manufacturer"
                    placeholderTextColor="#003f5c"
                    onChangeText={manufacturerValue}
                />
            </View>
            <br></br><br></br>
            <View style={globalstyles.inputView} >
                <TextInput
                    keyboardType={"text"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Vendor"
                    placeholderTextColor="#003f5c"
                    onChangeText={vendorValue}
                />
            </View>
            <br></br><br></br>
            <View style={globalstyles.inputView} >
                <TextInput
                    keyboardType={"numeric"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="Price"
                    placeholderTextColor="#003f5c"
                    onChangeText={priceValue}
                />
            </View>
            <br></br>
            <TouchableOpacity style={globalstyles.touchButtonContainer3}
                onPress={() => submitHandler(name,  category,  quantity,manufacturer, vendor,price )} >
                <Text>Add</Text>
            </TouchableOpacity>

        </View>
        </View>
        </div>
        </div>
    )
}