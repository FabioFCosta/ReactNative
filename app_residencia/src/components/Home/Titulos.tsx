import React from "react";
import { Text } from "react-native-elements";
import { StyleSheet } from "react-native";

const TitulosHome=({titulo})=>{

  return(
    <Text style={styles.titulo}>{titulo}</Text>
  )
}

const styles = StyleSheet.create({
  titulo: {
    color:'#7054B6', 
    fontWeight:'bold',
    fontSize:20,
    marginTop:5,
    marginBottom:5 
  },
})

export default TitulosHome;