import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { SearchBar } from "../../components/Search";

import { IconCategoria } from "../../components/Categorias/IconCategorias";
import { CategoriaType } from "../../models/CategoriaType";

import AxiosInstance from "../../api/AxiosInstance";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";


const Categorias = () => {

  useEffect(() => {
    getDadosCategoria();
  }, []);
  
  const [categoria, setCategoria] = useState<CategoriaType[]>([]);
  const { usuario } = useContext(AutenticacaoContext);

  const getDadosCategoria = async () => {
    AxiosInstance.get(
      '/categoria',
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      console.log('Dados das categorias: ' + JSON.stringify(result.data));
      setCategoria(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));
    })
  }
  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
      style={styles.flatList}
        numColumns={2}
        data={categoria}
        keyExtractor={item => item.idCategoria}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => console.log(`${item.nomeCategoria} foi clicada`)}
          >
            <IconCategoria categoria={item} />
          </TouchableOpacity>
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
  flatList:{
    alignSelf:'center',
  }
  
})
export default Categorias;