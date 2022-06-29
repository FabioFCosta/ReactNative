import React, { useEffect, useState, useContext } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";
import CardCategoria from "./CardCategorias";
import { AppLoader } from "../AppLoader";

import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { LoginContext } from "../../context/LoginContext";
import { CategoriaType } from "../../models/CategoriaType";

const ScrollCategorias = () => {
  const { usuario } = useContext(AutenticacaoContext);
  const [categoria, setCategoria] = useState<CategoriaType[]>([]);
  const { loginPending, setLoginPending } = useContext(LoginContext);

  useEffect(() => {
    setLoginPending(true);
    getDadosCategoria();
  }, []);

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
    { setLoginPending(false) }
  }

  return (
    <FlatList
      horizontal={true}
      data={categoria}
      keyExtractor={item => item.idCategoria}
      renderItem={({ item }) =>
        <TouchableOpacity
          onPress={() => console.log(`${item.nomeCategoria} foi clicada`)}
        >
          {loginPending ? <AppLoader /> : null}
          <CardCategoria categoria={item} />
        </TouchableOpacity>
      }
    />

    // <ScrollView style={styles.scroll_categorias} horizontal={true}>
    //   {
    //     categoria.map((k, i) => (
    //       <TouchableOpacity key={i}
    //         onPress={() => console.log(`${k.nomeCategoria} foi clicada`)}
    //         style={styles.botao_categoria}
    //       >
    //         {loginPending ? <AppLoader /> : null}
    //         <CardCategoria categoria={k} />

    //       </TouchableOpacity>
    //     ))
    //   }

    // </ScrollView>

  );
}

const styles = StyleSheet.create({
  scroll_categorias: {
    padding: 0,
    margin: 0
  }
})

export default ScrollCategorias;