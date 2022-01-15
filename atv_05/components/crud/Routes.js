import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddUserScreen from './addUserScreen';
import ListUserScreen from './listUserScreen';
import EditUserScreen from './EditUserScreen';

const MainStack = createStackNavigator()

function MainStackScreens(){
    return(
        <NavigationContainer>
            <MainStack.Navigator initialRouteName='ListUserScreen'>
                <MainStack.Screen
                name='AddUserScreen'
                component={AddUserScreen}
                options={{title: 'Adicionar novo usuário'}}/>

                <MainStack.Screen
                name='EditUserScreen'
                component={EditUserScreen}
                options={{title: 'Editar usuário'}}/>
                
                <MainStack.Screen
                name='ListUserScreen'
                component={ListUserScreen}
                options={{title: 'Lista de usuários'}}/>
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
export default MainStackScreens