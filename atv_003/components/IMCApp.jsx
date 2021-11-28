import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";

import IMCCalc from "./IMCCalc";

export default class Entrada extends Component{
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, click:false}
    }
    calcular = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({click:true})
        }
        console.log(this.state.click);
    }
    renderizarIMC(){
        if(this.state.click){
            return(
                <IMCCalc altura={this.state.altura} peso={this.state.peso}></IMCCalc>
            )
        }
    }
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.titulo}>Calculadora de IMC</Text>
                <TextInput placeholder="Altura" style={estilos.inputs} onChangeText={(valor)=>this.setState({altura:valor})}></TextInput>
                <TextInput placeholder="Peso" style={estilos.inputs} onChangeText={(valor)=>this.setState({peso:valor})}></TextInput>
                <View style={estilos.botao}><Button title="Calcular" onPress={this.calcular}/></View>
                {this.renderizarIMC()}
            </View>
        )
    }
}

const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            width: '100%',
            justifyContent:'center', 
        },
        titulo:{
            fontSize:21,
            fontWeight:'700',
            color: '#121212',
            margin:10
        },
        inputs:{
            height:50,
            width:'95%',
            borderColor: 'gray',
            borderWidth:1,
            borderRadius:5,
            marginTop:5,
            marginLeft: 10,
            paddingLeft:20,
            fontSize:18
        },
        botao:{
            width:'95%',
            margin:10,
        }
    }
)