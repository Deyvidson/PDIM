import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Text>
                    nome: {this.props.nome}
                </Text>
                <Text>
                    curso: {this.props.curso}
                </Text>
            </View>
        )
    }
}