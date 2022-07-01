import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SearchBar } from "../../components/Search";

import { IconCategoria } from "../../components/Categorias/IconCategorias";
import { CategoriaType } from "../../models/CategoriaType";

import AxiosInstance from "../../api/AxiosInstance";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { CategoriaContext } from "../../context/CategoriaContext";

const Categorias = () => {

  const {categoria, setCategoria} = useContext(CategoriaContext);
  
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={categoria}
        keyExtractor={item => item.idCategoria}
        renderItem={response =>
          <IconCategoria categoria={response.item} />
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bba3f8',
    padding: 15,
    margin: 0,
  },
  flatList: {
    alignSelf: 'center',
  }

})
export default Categorias;