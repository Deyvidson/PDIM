import React from 'react';
import { StyleSheet } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './components/Routes';

const App = ()=>
<SafeAreaProvider><Routes/></SafeAreaProvider>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App