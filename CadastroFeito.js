import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CadastroFeito({ navigation }) {
  const handleContinuar = () => {
    // Navegar para a tela de Informações dos Planetas quando o botão "Continuar" for pressionado
    navigation.navigate('PlanetInfo');
  }

  const handleCamera = () => {
    // Navegar para a tela da câmera quando o botão "Câmera" for pressionado
    navigation.navigate('Camera');
  }

  return (
    <View style={styles.container}>
      <Text>Cadastro realizado com sucesso!</Text>
      <Button
        title="Voltar para o Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Pesquisar"
        onPress={handleContinuar}
      />
      <Button
        title="Câmera"
        onPress={handleCamera}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos aqui
});
