import React, {useState} from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native-web";
import firebase from "../../firebase/firebase_config";

const AddUserScreen = (props) => {
    const initialState = {nome:'', sobrenome:'', curso:'', ira:''}
    const [state, setState] = useState(initialState)
    const addNewUser = async () => {
        try{
            await firebase.db.collection('users').add({
                nome: state.nome,
                sobrenome: state.sobrenome,
                curso: state.curso,
                ira: state.ira
            })
            props.navigation.navigate('ListUserScreen')
        }catch(error){
            console.log(error);
        }
    }

    const handleChangeText = (value,nome)=>{
        setState({...state, [nome]:value})
    }
    return(
        <ScrollView style={styles.container}>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Digite seu nome'
                    value={state.nome}
                    onChangeText={(value) => handleChangeText(value,'nome')}/>
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Digite seu sobrenome'
                    value={state.sobrenome}
                    onChangeText={(value) => handleChangeText(value,'sobrenome')}/>
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Digite seu curso'
                    value={state.curso}
                    onChangeText={(value) => handleChangeText(value,'curso')}/>
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Digite seu IRA'
                    value={state.ira}
                    onChangeText={(value) => handleChangeText(value,'ira')}/>
            </View>
            <View>
                <Button title='Adicionar' onPress={() => addNewUser()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:40
    },
    textInput: {
        flex:1,
        padding:5,
        marginBottom:20,
        borderBottomWidth:1,
    },
})

export default AddUserScreen