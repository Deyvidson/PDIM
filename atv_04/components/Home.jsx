import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Home extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>ATIVIDADE 04</Text>
                <View style={estilos.button}><Button title="Cadastro" onPress={()=>this.props.navigation.navigate('Cadastro', {})}/></View>
                <View style={estilos.button}><Button title="IMC" onPress={()=>this.props.navigation.navigate('IMC', {})}/></View>
                <View style={estilos.button}><Button title="Sobre" onPress={()=>this.props.navigation.navigate('Sobre', {})}/></View>
            </View>
        )
    }
}





const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        cabecalho:{
            fontSize:21,
            fontWeight:'bold',
            marginBottom:10
        },
        button:{
            width:'90%',
            padding: 5
        }
    }
)