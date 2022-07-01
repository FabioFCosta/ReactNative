import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Produto = ({ route, navigation }) => {
  const { id_produto, sku, nome_produto, descricao_produto, imagem_produto, preco_produto } = route.params;
  const { adicionarProduto } = useContext(CarrinhoContext);

  // _sku: string, _nome: string, _descricao: string, _preco: number, _imagem: string

  const handleAddProduto = () => {
    adicionarProduto(sku, nome_produto, descricao_produto, preco_produto, imagem_produto);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container_imagem}>
        <Text>Imagem</Text>
      </View>
      <View>
        <Text style={styles.nome_produto}>{nome_produto}</Text>
        <Text style={styles.preco_produto}>{preco_produto}</Text>
        <TouchableOpacity style={styles.btt_comprar} onPress={() => handleAddProduto()}>
          <Text style={styles.txt_btt_comprar}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btt_favoritar}>
          <Text style={styles.txt_btt_favoritar}>Favoritar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Produto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#997AE5',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexGrow: 1
  },
  container_imagem: {
    width: '50%',
  },
  container_produto: {
    width: '50%',
  },
  nome_produto: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  preco_produto: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  btt_comprar: {
    backgroundColor: '#000',
    padding: 10,
  },
  txt_btt_comprar: {
    color: '#fff',
    textAlign: 'center'
  },
  btt_favoritar: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#000'
  },
  txt_btt_favoritar: {
    color: '#fff',
    textAlign: 'center'
  },
});