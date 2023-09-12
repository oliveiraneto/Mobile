// App.js (ou arquivo de configuração de navegação)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import CadastroFeito from './CadastroFeito';
import PlanetInfo from './PlanetInfo'; // Certifique-se de que isso está importado
import CameraScreen from './CameraScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroFeito" component={CadastroFeito} />
        <Stack.Screen name="PlanetInfo" component={PlanetInfo} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;