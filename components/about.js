import React from "react";
import { globalstyles } from "../globalstyles/globalstyles";
import { View, Text } from "react-native";

export default function AboutComponent(props){

    console.log(props);
    const detail = props.route.params.item

    return(
        <View style={globalstyles.containerStyle}>
            <Text style={globalstyles.textStyle}>I am at about!</Text>
            <Text style={globalstyles.textStyle}> {detail.name} from {detail.location} </Text>
        </View>
    )
}