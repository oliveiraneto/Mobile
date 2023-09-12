import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PlanetInfo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [planetInfo, setPlanetInfo] = useState('');

  // Função para buscar informações sobre o planeta com base na pesquisa
  const searchPlanetInfo = () => {
    // Verificar o valor de searchQuery e definir planetInfo com base nesse valor
    if (searchQuery.toLowerCase() === 'planetas') {
      setPlanetInfo(`Planetas são corpos celestes que orbitam em torno de estrelas, como nosso próprio planeta, a Terra, que orbita o Sol.\nEles não emitem luz própria, mas refletem a luz de suas estrelas-mãe.\nPlanetas variam em tamanho, composição e características. Alguns têm atmosferas, luas e condições adequadas para a vida, enquanto outros são inabitáveis.`);
    } else if (searchQuery.toLowerCase() === 'sol') {
      setPlanetInfo(`O Sol é a estrela central do nosso sistema solar e a fonte primária de luz e energia para os planetas que o orbitam.\nÉ uma estrela de tipo espectral G2V, composta principalmente de hidrogênio e hélio, que passa por reações nucleares em seu núcleo, produzindo calor e luz através da fusão nuclear.\nO Sol desempenha um papel fundamental na manutenção da vida na Terra, fornecendo calor e luz para sustentar a vida e o clima do planeta.`);
    } else if (searchQuery.toLowerCase() === 'estrelas') {
      setPlanetInfo(`As estrelas são corpos celestes massivos que emitem luz e calor devido a reações nucleares em seus núcleos.\nExistem bilhões de estrelas em nossa galáxia, a Via Láctea, e bilhões de galáxias no universo, cada uma com sua própria coleção de estrelas.\nAs estrelas variam em tamanho, cor e temperatura, e sua evolução pode levar à formação de buracos negros, supernovas e outras estruturas cósmicas.`);
    } else if (searchQuery.toLowerCase() === 'buracos negros') {
      setPlanetInfo(`Um buraco negro é uma região do espaço onde a gravidade é tão intensa que nada, nem mesmo a luz, pode escapar de sua atração.\nEles se formam quando uma estrela massiva colapsa sob sua própria gravidade após esgotar seu combustível nuclear.\nBuracos negros vêm em diferentes tamanhos, desde pequenos buracos negros estelares até buracos negros supermassivos encontrados no centro das galáxias.`);
    } else if (searchQuery.toLowerCase() === 'galáxias') {
      setPlanetInfo(`Galáxias são vastas estruturas compostas por bilhões ou até trilhões de estrelas, bem como gás, poeira e matéria escura, todas mantidas juntas pela gravidade.\nA Via Láctea é a galáxia em que nosso sistema solar está localizado.\nExistem diferentes tipos de galáxias, incluindo espirais, elípticas e irregulares, cada uma com sua própria organização e características únicas.`);
    } else {
      setPlanetInfo(`Nenhuma informação encontrada para "${searchQuery}"`);
    }
  }

  return (
    <View style={styles.container}>
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
});