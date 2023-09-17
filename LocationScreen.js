import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LocationScreen({ navigation }) {
  const handleActivateLocation = () => {
    // Implemente a lógica para ativar a localização aqui
    // Isso pode envolver o uso de bibliotecas como react-native-geolocation-service
  };

  return (
    <View style={styles.container}>
      <Text>Use sua localização atual para ver quais estrelas podem ser vistas no céu.</Text>
      
      <Button
        title="Ativar Localização"
        onPress={handleActivateLocation}
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
