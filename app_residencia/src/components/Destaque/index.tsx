import React from "react";
import { Card, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import TitulosHome from "../Home/Titulos";

export const Destaque = ({ nome, desc }) => {
  return (
    <>
      <TitulosHome titulo="Destaques" />
      <Card containerStyle={styles.card_container} >
        <Card.Image style={styles.card_image} source={require('../../assets/1.jpg')} />
        <View style={styles.desc_container}>
          <Card.Title style={styles.card_desc}>{nome}</Card.Title>
          <Text style={styles.card_desc}>{desc}</Text>
        </View>
      </Card>
    </>

  );
}
const styles = StyleSheet.create({
  card_container: {
    height: 250,
    padding: 0,
    margin: 0,
    borderRadius:20,
  },
  desc_container: {
    paddingTop:10,
    height:100,    
  },
  card_desc: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  card_image: {
    height: 150,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
  },
});

