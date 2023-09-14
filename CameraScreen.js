import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen({ navigation }) {
  const handleOpenCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync(); 
    if (status === 'granted') {
      navigation.navigate('CameraView'); // Navegue para a tela de visualização da câmera
    } else {
      // Trate o caso em que a permissão da câmera não foi concedida
      alert('Acesso à câmera negado. Por favor, conceda permissão para usar a câmera.');
    }
  }
  

  return (
    <View style={styles.container}>
      <Image
        source={require('./constellation.png')} 
        style={styles.logo}
      />
      <Text style={styles.subtitle}>Aponte a câmera para o seu e descubra qual constelação foi capturada.</Text>
      <Button
        title="Abrir Câmera"
        onPress={handleOpenCamera}
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
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: 230, // Ajuste o tamanho da sua logo conforme necessário
    height: 150, // Ajuste o tamanho da sua logo conforme necessário
    marginBottom: 20,
  },
});
