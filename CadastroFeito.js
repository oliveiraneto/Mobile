// CadastroFeito.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CadastroFeito({ navigation }) {
  const handleContinuar = () => {
    // Navegar para a tela de Informações dos Planetas quando o botão "Continuar" for pressionado
    navigation.navigate('PlanetInfo');
  }

  return (
    <View style={styles.container}>
      <Text>Cadastro realizado com sucesso!</Text>
      <Button
        title="Voltar para o Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Continuar"
        onPress={handleContinuar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
