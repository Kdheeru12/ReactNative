import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Header from './componets/Header'

export default function App(){
    const a = [1,3,4]
    return (
      <View style={styles.container}>
        <Header/>
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})