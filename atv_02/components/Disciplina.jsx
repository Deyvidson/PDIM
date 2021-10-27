import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Disciplina extends Component{
    render(){
        return(
            <Text>
                disciplina: {this.props.disciplina}
            </Text>     
        )
    }
}