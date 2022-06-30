import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-elements";

export const IconCategoria = ({categoria})=>{

  return(
    <Card containerStyle={styles.card_container} >
      <Card.Image 
      source={{uri:categoria.nomeImagem}}
      style={styles.card_image}
       />      
    </Card>
  );
}

const styles = StyleSheet.create({
  card_container: {
    width:150,
    height:150,
    borderRadius:50,
    padding:0,
    marginVertical:30,
    marginHorizontal:10,
    alignItems: 'center'  
  },
  card_image: {
    width:150,
    height:150,
    borderRadius:50,
  }
});