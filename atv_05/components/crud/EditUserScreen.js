import React, {useState, useEffect, useReducer} from "react";
import { View, Text, Button, ScrollView, ActivityIndicator, StyleSheet, TextInput } from "react-native-web";
import firebase from "../../firebase/firebase_config";

const EditUserScreen = (props) => {
    const initialState = {id:'', nome:'', sobrenome:'', curso:'', ira:''}
    const [user, setUser] = useState(initialState)

    useEffect(
        ()=>{getUserById(props.route.params.userId)},[]
    )

    const handleChangeText = (value,prop)=>{
        setUser({...user, [prop]:value})
    }

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get()
        const user = doc.data()
        setUser({...user, id:doc.id})
    }

    const deleteUser = async (id) => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId)
        await dbRef.delete()
        props.navigation.navigate('ListUserScreen')
    }
    
    const updateUser = async () => {
        const userRef = firebase.db.collection('users').doc(user.id)
        await userRef.set({
            nome: user.nome,
            sobrenome: user.sobrenome,
            curso: user.curso,
            ira: user.ira
        })
        setUser(initialState)
        props.navigation.navigate('ListUserScreen')
    }

    return(
        <ScrollView style={styles.container}>
            <View>
                <TextInput
                    placeholder='Digite o seu nome'
                    style={styles.input}
                    value={user.nome}
                    onChangeText={(value) => handleChangeText(value,'nome')}/>
            </View>
            <View>
                <TextInput
                    placeholder='Digite o seu sobrenome'
                    style={styles.input}
                    value={user.sobrenome}
                    onChangeText={(value) => handleChangeText(value,'sobrenome')}/>
            </View>
            <View>
                <TextInput
                    placeholder='Digite o seu curso'
                    style={styles.input}
                    value={user.curso}
                    onChangeText={(value) => handleChangeText(value,'curso')}/>
            </View>
            <View>
                <TextInput
                    placeholder='Digite o seu IRA'
                    style={styles.input}
                    value={user.ira}
                    onChangeText={(value) => handleChangeText(value,'ira')}/>
            </View>
            <View style={styles.button}>
                <Button
                    title='Apagar'
                    color='red'
                    onPress={()=>deleteUser()}/>
            </View>
            <View>
                <Button
                    title='Atualizar'
                    onPress={()=>updateUser()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:40
    },
    input:{
        flex:1,
        padding:5,
        marginBottom:20,
        borderBottomWidth:1,

    },
    button:{
        marginTop:10,
        marginBottom:10
    }
})

export default EditUserScreen