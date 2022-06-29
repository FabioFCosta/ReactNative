import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const CardCategoria = ({categoria}) => {
  return (
      <View style={styles.view_itens_categoria}>
        <Text style={styles.texto_nome_categoria}>{categoria.nomeCategoria}</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  view_itens_categoria: {
    width: 120,
    height: 120,
    marginRight:10,
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