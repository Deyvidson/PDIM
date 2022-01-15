import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Button } from "react-native-web";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-web";
import firebase from "../../firebase/firebase_config";

const ListUserScreen = (props) => {
    const [users, setUsers] = useState([{id:1, nome:'', sobrenome:'', curso:'', ira:''}])
    useEffect(
        ()=>{
            firebase.db.collection('users').onSnapshot(
                (queryOnSnapshot)=>{
                    const users=[]
                    queryOnSnapshot.docs.forEach(
                        (doc)=>{
                            const {nome, sobrenome, curso, ira} = doc.data()
                            users.push({id:doc.id, nome, sobrenome, curso, ira})
                        }
                    )
                        setUsers(users)
                }
            )
        },[]
    )

    return(
        <ScrollView>
            <Button
                onPress={()=>props.navigation.navigate('AddUserScreen')} title='Adicionar usuário'/>
            {users.map(
                    (user) => {
                        return(
                            <ListItem
                                key={user.id}
                                bottomDivider
                                onPress={()=>{
                                    props.navigation.navigate('EditUserScreen', {userId:user.id})
                                }}>
                                
                                <Avatar squared source={{uri:'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'}}/>
                                
                                <ListItem.Content>
                                    <ListItem.Title>Nome: {user.nome} {user.sobrenome}</ListItem.Title>
                                    <ListItem.Subtitle>Curso: {user.curso}</ListItem.Subtitle>
                                    <ListItem.Subtitle>IRA: {user.ira}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        )
                    }
                )
            }
        </ScrollView>
    )
}
export default ListUserScreen