import React, { useEffect, useState, useContext } from "react";
import { ScrollView, View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";

import { ProdutoType } from "../../models/ProdutoType";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { LoginContext } from "../../context/LoginContext";

import CardRecentes from "./CardRecentes";
import TitulosHome from "../Home/Titulos";
import { AppLoader } from "../AppLoader";

const ScrollRecentes = () => {
  const { usuario } = useContext(AutenticacaoContext);
  const [produto, setProduto] = useState<ProdutoType[]>([]);
  const { loginPending, setLoginPending } = useContext(LoginContext);

  useEffect(() => {
    getDadosProduto();
  }, []);

  const getDadosProduto = async () => {
    setLoginPending(true);
    AxiosInstance.get(
      '/produto',
      { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
      console.log('Dados dos produtos: ' + JSON.stringify(result.data));
      setProduto(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
    })
    setLoginPending(false);
  }

  return (
    <>
      <TitulosHome titulo="Recentes" />
      <FlatList
        horizontal={true}
        data={produto}
        keyExtractor={item => item.idProduto}
        renderItem={({ item }) =>
          <TouchableOpacity
            onPress={() => console.log(`O produto ${item.nomeProduto} foi clicado`)}
          >
            {loginPending ? <AppLoader /> : null}
            <CardRecentes produto={item} />
          </TouchableOpacity>
        }
      />
    </>

    // <View>
    //   <TitulosHome titulo="Recentes"/>
    //   <ScrollView horizontal={true}>
    //   {
    //     produto.map((k, i) => (
    //       <TouchableOpacity key={i}
    //         onPress={() => console.log(`O produto ${k.nomeProduto} foi clicado`)}
    //         style={styles.card_produto}
    //       >
    //         {loginPending ? <AppLoader /> : null}
    //         <CardRecentes produto={k} />
    //       </TouchableOpacity>
    //     ))
    //   }
    //   </ScrollView>
    // </View>
  )
}

export default ScrollRecentes;