import React from "react";
import { Card, Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity } from "react-native";

const CardProdutos = (props) => {

  const handleClick=(props)=>{    
    console.log(`O produto ${props.produto.nomeProduto} foi clicado`)
    props.navigation.navigate({name:'ProdutoScreen',params:{
      id_produto: props.produto.idProduto,
      sku:props.produto.sku,
      nome_produto:props.produto.nomeProduto,
      descricao_produto:props.produto.descricaoProduto,
      preco_produto:props.produto.precoProduto,
      imagem_produto:props.produto.imagemProduto,
    }})
  }

  return (
    <TouchableOpacity
      onPress={()=>handleClick(props)}
    >
      <Card containerStyle={styles.card_container} >
        <Card.Image
          source={{ uri: props.produto.imagemProduto }}
          style={styles.card_image}
        />
        <Card.Title style={styles.card_desc}>{props.produto.nomeProduto}</Card.Title>
        <Text style={styles.card_desc}>{props.produto.descricaoProduto}</Text>
      </Card>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  card_container: {
    width: 185,
    height: 250,
    borderRadius: 10,
    padding: 0,
    margin: 0,
    marginRight: 10,
    alignItems: 'center',
  },
  card_image: {
    width: 185,
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card_desc: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingVertical: 0,
    margin: 0,
    paddingHorizontal: 10,
  }
});

export default CardProdutos;
