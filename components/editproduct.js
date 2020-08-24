import React, { useState } from "react";
import { globalstyles } from "../globalstyles/globalstyles";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Axios from "axios";

export default function EditProductComponent(navigation) {
    let pro = navigation.route.params.item
    // console.log(detail.id)
    
    console.log(navigation)
    console.log(pro.id)
    let id;
    const [name, setname] = useState(pro.Product_Name);
    
    
    const [quantity, setQuantity] = useState(pro.Product_Quantity);
    const [category, setCategory] = useState(pro.Product_Category);
    const [manufacturer, setManufacturer] = useState(pro.Manufacturer);
    const [vendor, setVendor] = useState(pro.Vendor);
    const [price, setPrice] = useState(pro.Product_Price);
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
    const submitHandler = (name, category, quantity, manufacturer,vendor,price) => {
        
        let product = {
           
            Product_Name: name,
            Product_Category: category,
            Product_Quantity: quantity,
            Manufacturer: manufacturer,
            Vendor: vendor,
            Product_Price: price,
            
        }
        console.log(product)
        Axios.put('http://localhost:3000/allProducts1/'+pro.id,product).then(response => {
            navigation.navigation.navigate('Products')
        })
    }
    return (
        <div style={{width:'60%',backgroundColor: 'lightblue', padding:'3% 3% 3% 3%',border: '3px solid #f1f1f1',margin: '0px 0% 0px 18%'}}>
        <View>
            <View> 
            <Text style={globalstyles.textStyle}>Edit Product</Text>
            <br></br><br></br>
            <View style={globalstyles.inputfriend} >
                <TextInput
                   style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                   value={name}
                    placeholderTextColor="#003f5c"
                    onChangeText={namevalue}
                />
            </View>
           
<br></br><br></br>
            <View>
                <TextInput
                    keyboardType={"numeric"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  value={quantity}
                    placeholderTextColor="#003f5c"
                    onChangeText={quantityValue}
                />
            </View>
            <br></br><br></br>
            <View style={globalstyles.inputfriend} >
                <TextInput

style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                   value={category}
                    placeholderTextColor="#003f5c"
                    onChangeText={categoryValue}
                />
            </View>
            <br></br><br></br>
            <View style={globalstyles.inputView} >
                <TextInput
                    keyboardType={"text"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  value={manufacturer}
                    placeholderTextColor="#003f5c"
                    onChangeText={manufacturerValue}
                />
            </View>
            <br></br><br></br>
            <View style={globalstyles.inputView} >
                <TextInput
                    keyboardType={"text"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  value={vendor}
                    placeholderTextColor="#003f5c"
                    onChangeText={vendorValue}
                />
            </View>
            <br></br><br></br>
            <View style={globalstyles.inputView} >
                <TextInput
                    keyboardType={"numeric"}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                   value={price}
                   placeholderTextColor="#003f5c"
                    onChangeText={priceValue}
                />
            </View>
            <br></br>
            <TouchableOpacity style={globalstyles.touchButtonContainer3}
                onPress={() => submitHandler( name, category,quantity, manufacturer, vendor,price,   )} >
                <Text>Edit</Text>
            </TouchableOpacity>

        </View>
        </View>
        </div>
    )
}