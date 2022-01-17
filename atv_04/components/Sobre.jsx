import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Sobre extends Component{
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou:false}
    }
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>Sobre</Text>
                <Text style={estilos.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
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
        text:{
            fontSize:16,
            padding:30
        },
        button:{
            width:'90%',
            Padding:5,
            marginTop:10,
        }
    }
)