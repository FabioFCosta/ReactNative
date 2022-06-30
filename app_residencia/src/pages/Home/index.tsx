import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ScrollCategorias from "../../components/Categorias/ScrollCategorias";
import ScrollProdutos from "../../components/Produtos/ScrollProdutos";
import { SearchBar } from "../../components/Search";
import { Destaque } from "../../components/Destaque";

const Home = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <ScrollCategorias />
      <ScrollProdutos />
      <Destaque nome="Título 1" desc="Descrição 1" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bba3f8',
    padding: 15,
    margin: 0
  },
})

export default Home;

{/*
<Icon name="heart" color="#000" type="font-awesome" size={24} />
<Icon name="shopping-basket" color="#000" type="font-awesome" size={24} /> */}