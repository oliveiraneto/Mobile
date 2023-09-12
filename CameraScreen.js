import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CameraScreen({ navigation }) {
  const handleOpenCamera = () => {
    // Implemente a lógica para abrir a câmera aqui
    // Você pode usar bibliotecas como react-native-camera ou expo-camera
  }

  return (
    <View style={styles.container}>
      <Text>Tela da Câmera</Text>
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
});
