import React from "react";
import { Text } from "react-native";

const Resultado = (props) => {
    if(17 > props.IMC) 
        return <Text style={{fontSize:21, fontWeight:'bold', marginLeft:10, color: 'red'}}>Muito abaixo do peso</Text>
    if(17 <= props.IMC &&  props.IMC <= 18.49) 
        return <Text style={{fontSize:21, fontWeight:'bold', marginLeft:10, color: 'red'}}>Abaixo do peso</Text>
    if(18.5 <=  props.IMC &&  props.IMC <= 24.99) 
        return <Text style={{fontSize:21, fontWeight:'bold', marginLeft:10, color: 'blue'}}>Peso normal</Text>
    if(25 <=  props.IMC &&  props.IMC <= 29.99) 
        return <Text style={{fontSize:21, fontWeight:'bold', marginLeft:10, color: 'red'}}>Acima do peso</Text>
    if(30 <=  props.IMC &&  props.IMC <= 34.99) 
        return <Text style={{fontSize:21, fontWeight:'bold', marginLeft:10, color: 'red'}}>Obesidade I</Text>
    if(35 <=  props.IMC &&  props.IMC <= 39.99) 
        return <Text style={{fontSize:21, fontWeight:'bold', marginLeft:10, color: 'red'}}>Obesidade II (Severa)</Text>
    if(40 <  props.IMC) 
        return <Text style={{fontSize:21, fontWeight:'bold', marginLeft:10, color: 'red'}}>Obesidade III (Mórbida)</Text>
}
export default Resultado