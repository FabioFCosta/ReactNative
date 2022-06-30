import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const CardCategoria = (props) => {

  const handleClick = (categoria) => {
    console.log(`A categoria ${categoria.nomeCategoria} foi clicada`)
  }
  
  return (
    <TouchableOpacity
      onPress={() => handleClick(props.categoria)}
    >
      <View style={styles.view_itens_categoria}>
        <Text style={styles.texto_nome_categoria}>{props.categoria.nomeCategoria}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  view_itens_categoria: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: '#333',
    alignContent: 'center',
    justifyContent: 'center',

  },
  texto_nome_categoria: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default CardCategoria;