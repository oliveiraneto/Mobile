import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function CadastroFeito({ navigation }) {
  const handleContinuar = () => {
    // Navegar para a tela de Informações dos Planetas quando o botão "Continuar" for pressionado
    navigation.navigate('PlanetInfo');
  }

  const handleCamera = () => {
    // Navegar para a tela da câmera quando o botão "Câmera" for pressionado
    navigation.navigate('Camera');
  }

  const handleLocation = () => {
    // Navegar para a tela de localização quando o botão "Localização" for pressionado
    navigation.navigate('LocationScreen');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./astronaut.png')} 
        style={styles.logoImage}
      />
      <Text>Cadastro realizado com sucesso!</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Voltar para o Login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Pesquisar"
            onPress={handleContinuar}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Câmera"
            onPress={handleCamera}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Localização"
            onPress={handleLocation}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 150, 
    height: 150, 
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    marginBottom: 10,
  },
});
