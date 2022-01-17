import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import imagem from "./imagem.png"

export default class Perfil extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Image source={imagem} style={{width:200, height:200}}/>
                <Text style={estilos.cabecalho}>Perfil</Text>
                <Text style={estilos.textoCorpo}>Nome: {this.props.route.params.nome}</Text>
                <Text style={estilos.textoCorpo}>Idade: {this.props.route.params.idade}</Text>
                <Text style={estilos.textoCorpo}>E-mail: {this.props.route.params.email}</Text>
                <View style={estilos.button}>
                    <Button title="HOME" onPress={()=>this.props.navigation.navigate('Home', {})}/>
                </View>
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
        },
        textoCorpo:{
            fontSize:18,
        },
        button:{
            width:'90%',
            marginTop:10,
            padding:5,
        }
    }
)