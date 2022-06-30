import React from "react";
import { Card, Text } from "react-native-elements";
import { StyleSheet} from "react-native";

const CardProdutos = ({produto}) => {
  console.log(produto.imagemProduto)
  return (
    <Card containerStyle={styles.card_container} >
      <Card.Image 
      source={{uri:produto.imagemProduto}}
      style={styles.card_image}
       />
      <Card.Divider/>     
      <Card.Title style={styles.card_desc}>{produto.nomeProduto}</Card.Title>
      <Text style={styles.card_desc}>{produto.descricaoProduto}</Text>
    </Card>
  )
}
const styles = StyleSheet.create({
  card_container: {
    width:150,
    height:220,
    borderRadius:10,
    padding:0,
    margin:0,
    marginRight:10,
    alignItems: 'center'  
  },
  card_image: {
    width:150,
    height:120,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  card_desc: {
    textAlign:'left',
    alignSelf:'flex-start',
    paddingVertical:0,
    paddingHorizontal:10,
  }
});

export default CardProdutos;