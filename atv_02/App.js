import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Corpo from './components/Corpo';
import Cabecalho from './components/Cabecalho';
import Disciplina from './components/Disciplina';
import imagem from "./imagem.jpg"


export default function App() {
  return (
    <View style={styles.container} >
        <Cabecalho nome="Deys Lima" curso="Design Digital"/>
        <Corpo figura={imagem}/>
        <Disciplina disciplina="PDIM"/>
        <Disciplina disciplina="Projeto Integrado IV"/>
        <Disciplina disciplina="Design e Inovação"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
