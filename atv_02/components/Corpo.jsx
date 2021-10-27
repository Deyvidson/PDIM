import React, { Component } from "react";
import { Text, View, Image } from "react-native";


export default class Corpo extends Component{
    render(){
        return(
            <Image source={this.props.figura}
            style={{width:320, height:320}}/>
        )
    }
}