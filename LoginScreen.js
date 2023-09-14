// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Se o login for bem-sucedido, navegue para a tela de "Cadastro Feito".
    navigation.navigate('CadastroFeito');
  }

  return (
    <View style={styles.container}>
      <Image
      source={require('./astronomy.png')} 
      style={styles.logoImage}
    />
      <Text style={styles.logo}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
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
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logoImage: {
    width: 100, 
    height: 100, 
    marginBottom: 20, 
  },
});