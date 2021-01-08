import { Block } from 'galio-framework';
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Login from './Components/Login';
import Register from './Components/Register'


const App = () => {
  return (
    <Block flex middle>
          <Login/>
    </Block>
  

  );
}

export default App;
