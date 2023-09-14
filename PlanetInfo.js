import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function PlanetInfo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [planetInfo, setPlanetInfo] = useState('');

  const searchPlanetInfo = () => {
    if (searchQuery.toLowerCase() === 'mercurio') {
      setPlanetInfo(`Mercúrio é o planeta mais próximo do Sol e o menor planeta do nosso sistema solar. É um mundo rochoso e não tem uma atmosfera significativa. As temperaturas em Mercúrio variam muito, com extremos de calor e frio.`);
    } else if (searchQuery.toLowerCase() === 'venus') {
      setPlanetInfo(`Vênus é muitas vezes chamado de "gêmeo da Terra" devido às suas semelhanças em tamanho e composição. No entanto, é um planeta extremamente quente devido à sua espessa atmosfera de dióxido de carbono.`);
    } else if (searchQuery.toLowerCase() === 'terra') {
      setPlanetInfo(`A Terra é o nosso lar, o único planeta conhecido a sustentar vida. Ela tem uma atmosfera que permite a vida e é caracterizada pela presença de água líquida em sua superfície.`);
    } else if (searchQuery.toLowerCase() === 'marte') {
      setPlanetInfo(`Marte, muitas vezes chamado de "Planeta Vermelho", é um planeta rochoso que já teve água líquida em sua superfície. Os cientistas têm estudado Marte em busca de evidências de vida passada ou presente.`);
    } else if (searchQuery.toLowerCase() === 'jupiter') {
      setPlanetInfo(`Júpiter é o maior planeta do sistema solar e é conhecido por sua Grande Mancha Vermelha, uma tempestade gigante na sua atmosfera. Ele é um gigante gasoso e não tem uma superfície sólida.`);
    } else {
      setPlanetInfo(`Nenhuma informação encontrada para "${searchQuery}"`);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./planets.png')} 
        style={styles.logo}
      />
      <Text>Pesquisa sobre Planetas do Sistema Solar</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do planeta..."
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
      <Button
        title="Pesquisar"
        onPress={searchPlanetInfo}
      />
      <Text style={styles.planetInfo}>{planetInfo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  planetInfo: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    width: 200, 
    height: 200, 
    marginBottom: 20,
  },
});
