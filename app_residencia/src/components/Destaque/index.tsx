import React from "react";
import { Card, Text } from "react-native-elements";
import { StyleSheet } from "react-native";
import TitulosHome from "../Home/Titulos";

export const Destaque = ({nome,desc}) => {
  return (
    <>
    <TitulosHome titulo="Destaques" />
    <Card containerStyle={styles.card_container} >
      <Card.Image source={require('../../assets/1.jpg')} />
      <Card.Divider />
      <Card.Title>{nome}</Card.Title>
      <Text>{desc}</Text>
    </Card>
    </>

  );
}
const styles = StyleSheet.create({
  card_container: {
    padding:0,
    margin:0,
  },
  card_desc: {
    textAlign:'left',
    alignSelf:'flex-start',
    paddingVertical:0,
    paddingHorizontal:10,
  }
});

