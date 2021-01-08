import React from 'react';
import {View,Text} from 'react-native'
const Header = () => {
    return (
        <View style={{height:60,padding:10,backgroundColor:'orange'}}>
            <Text style={{color:'white',fontSize:30,textAlign:'center'}}>
                Traversy
            </Text>
        </View>
    );
}

export default Header;
