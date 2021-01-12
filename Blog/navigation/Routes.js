import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Components/Login'
import { View,Text, ActivityIndicator } from 'react-native';
import Register from '../Components/Register';

const Stack = createStackNavigator();

// function Login(){
//     return(
//         <View>
//             <Text>
//                 dddd
//             </Text>
//         </View>
//     )
// }
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Register'>
                <Stack.Screen options={{
                    headerTitle:'Sign In',
                    headerTitleAlign:"center"
                }} name="Login" component={Login} />
                <Stack.Screen  options={{
                    headerTitle:'Sign Up',
                    headerTitleAlign:"center"
                }}name="Register" component={Register} />
                {/* <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    )
}
