import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  
  const cadastro = () => {
    alert('funcionando');
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width:300, height:200}} source={require('./assets/splash.png')} />
      
      <TextInput placeholder='Seu nome...' style={styles.TextInput} onChangeText={text=>setNome(text)}/>
      <TextInput placeholder='Seu email...' style={styles.TextInput} onChangeText={text=>setEmail(text)}/>
      <TextInput placeholder='Sua senha...' style={styles.TextInput} onChangeText={text=>setSenha(text)}/>
    
      <TouchableOpacity styles={styles.btcadastro} onPress={()=>cadastro()}>
        <Text style={{color:'white', textAlign:'center'}}>CADASTRAR!</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  TextInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10
  },
  btcadastro:{
    width:'100%',
    height:40,
    backgroundColor:'#7b42f5',
    borderRadius:30,
    justifyContent:'center'
  }

});
