import React from "react"
import { Text, View } from "react-native"

import Resultado from "./IMCMsg"

const IMCCalc = (props)=>{
    const imc = props.peso / (props.altura * props.altura)
    if(props.altura != null && props.peso != null){
        return(
            <View>
                 <Text style={{fontSize:21, marginLeft:10, fontWeight:'bold'}}>Seu IMC é: {imc} </Text>
                <Resultado IMC={imc}/>
            </View>
        )
    }
    return null
}

export default IMCCalc