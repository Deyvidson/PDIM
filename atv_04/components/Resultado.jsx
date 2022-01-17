import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Result_IMC = (props) => {
    if(17 > props.IMC) return <Text style={{fontSize:16}}>Muito abaixo do peso</Text>
    if(17 <= props.IMC && props.IMC <= 18.49) return <Text style={{fontSize:16}}>Abaixo do peso</Text>
    if(18.5 <= props.IMC && props.IMC <= 24.99) return <Text style={{fontSize:16}}>Peso normal</Text>
    if(25 <= props.IMC && props.IMC <= 29.99) return <Text style={{fontSize:16}}>Acima do peso</Text>
    if(30 <= props.IMC && props.IMC <= 34.99) return <Text style={{fontSize:16}}>Obesidade I)</Text>
    if(35 <= props.IMC && props.IMC <= 39.99) return <Text style={{fontSize:16}}>Obesidade II (Severa)</Text>
    if(40 < props.IMC) return <Text style={{fontSize:16}}>Obesidade III (Mórbida)</Text>
}

export default class Resultado extends Component {
    constructor(props) {
        super(props)
        this.state = { imc: (this.props.route.params.peso / (this.props.route.params.altura * this.props.route.params.altura))}
    }
    render() {
        return (
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>Resultado</Text>
                <Text style={estilos.cabecalho}>{this.state.imc}</Text>
                <Result_IMC IMC={(this.props.route.params.peso / (this.props.route.params.altura * this.props.route.params.altura))}></Result_IMC>
                <View style={estilos.button}><Button title="HOME" onPress={() => this.props.navigation.navigate('Home', {})}/></View>
            </View>
        )
    }
}





const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e5e5e5'
        },
        cabecalho: {
            fontSize: 21,
            fontWeight: 'bold',
        },
        button: {
            width: '90%',
            padding: 5
        }
    }
)