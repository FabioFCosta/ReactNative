import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

export const IconCategoria = (props) => {

  const handleClick = (categoria) => {
    console.log(`${props.categoria.nomeCategoria} foi clicada`)
  }

  return (
    <TouchableOpacity
      onPress={() => handleClick(props.categoria)}
    >
      <Card containerStyle={styles.card_container} >
        <Card.Image
          source={{ uri: props.categoria.nomeImagem }}
          style={styles.card_image}
        />
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card_container: {
    width: 150,
    height: 150,
    borderRadius: 50,
    padding: 0,
    marginVertical: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card_image: {
    width: 150,
    height: 150,
    borderRadius: 50,
  }
});