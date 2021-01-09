import { Block } from 'galio-framework';
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from './Components/Register'


const App = () => {
  console.log('dd')
  return (
    <Block flex middle>
          {/* <Login/> */}
          <Profile/>
    </Block>
  

  );
}

export default App;
