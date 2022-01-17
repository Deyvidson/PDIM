import React, { Component } from "react";
import { StyleSheet, View, Text,TextInput, Button } from "react-native";

export default class Cadastro extends Component{
    constructor(props){
        super(props)
        this.state = {nome:null, idade:null, email:null}
    }
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>Cadastro</Text>
                <TextInput placeholder="Digite seu nome" id="nome" style={estilos.input} onChangeText={(valorDoCampo)=>this.setState({nome:valorDoCampo})}></TextInput>
                <TextInput placeholder="Digite sua idade" style={estilos.input} onChangeText={(valorDoCampo)=>this.setState({idade:valorDoCampo})}></TextInput>
                <TextInput placeholder="Digite seu email" style={estilos.input} onChangeText={(valorDoCampo)=>this.setState({email:valorDoCampo})}></TextInput>
                <View style={estilos.button}>
                    <Button title="CONFIRMAR" onPress={()=>this.props.navigation.navigate('Modal', {nome:this.state.nome, idade:this.state.idade, email:this.state.email})}/>
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
            margin:10
        },
        input:{
            height:45,
            width:'90%',
            borderBottomWidth:1,
            padding:20,
            marginBottom:10,
            fontSize:16
        },
        button:{
            width:'90%',
            padding: 5
        }
    }
)