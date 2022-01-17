import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default class IMC extends Component{
    constructor(props){
        super(props)
        this.state = {altura: null, peso: null, mensagem:null}
    }
    render(){ 
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>IMC</Text>
                <TextInput placeholder="Digite sua altura" style={estilos.input} onChangeText={(valorDoCampo)=>this.setState({altura:valorDoCampo})}></TextInput>
                <TextInput placeholder="Digite seu peso" style={estilos.input} onChangeText={(valorDoCampo)=>this.setState({peso:valorDoCampo})}></TextInput>
                <View style={estilos.button}>
                    <Button title="CONFIRMAR" onPress={()=>this.props.navigation.navigate('Resultado', {altura:this.state.altura, peso:this.state.peso})}/>
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
            fontSize:24,
            fontWeight:'bold',
            margin:20
        },
        input:{
            height:45,
            width:'90%',
            padding:20,
            borderBottomWidth:1,
            marginBottom:10,
            fontSize:16
        },
        button:{
            width:'90%',
            padding:5
        }
    }
)