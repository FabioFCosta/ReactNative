import React, { useEffect, useState, useContext } from "react";
import { FlatList } from "react-native";
import AxiosInstance from "../../api/AxiosInstance";

import { ProdutoType } from "../../models/ProdutoType";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { LoginContext } from "../../context/LoginContext";

import CardProdutos from "./CardProdutos";
import TitulosHome from "../Home/Titulos";
import { AppLoader } from "../AppLoader";

const ScrollProdutos = () => {
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
      setProduto(result.data);
    }).catch((error) => {
      console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
    })
    setLoginPending(false);
  }

  return (
    <>
      <TitulosHome titulo="Recentes" />
      {loginPending ? <AppLoader /> :
        <FlatList
          horizontal={true}
          data={produto}
          keyExtractor={item => item.idProduto}
          renderItem={response =>
            <>
              <CardProdutos
                produto={response.item}
              />
            </>
          }
        />
      }
    </>
  )
}

export default ScrollProdutos;