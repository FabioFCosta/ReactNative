import React, { useContext, useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { Icon } from "react-native-elements";

const Carrinho = () => {

  const { listarProdutos, deletarProduto } = useContext(CarrinhoContext);
  const [carrinho, setCarrinho] = useState();

  useEffect(() => {
    getDadosCarrinho();
  }, [])

  const getDadosCarrinho = () => {
    setCarrinho(listarProdutos());
  }
  const deleteProdutoCarrinho=(item)=>{
    deletarProduto(item)
  }
  return (
    <FlatList
      data={carrinho}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.container_flatlist}>
            <Text>{item.id_produto}</Text>
            <Text>{item.sku}</Text>
            <Text>{item.nome_produto}</Text>
            <Text>{item.descricao_produto}</Text>
            <Text>{item.preco_produto}</Text>
            <TouchableOpacity onPress={() => deleteProdutoCarrinho(item)}>
              <Icon name="trash" color="#333" type="font-awesome" size={36} />
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}
export default Carrinho;

const styles = StyleSheet.create({
  container_flatlist: {
    flex: 1,
    backgroundColor: '#997',
    padding: 10,
    marginTop:20,
    marginBottom:20,    
  },
});