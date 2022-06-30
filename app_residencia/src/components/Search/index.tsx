import React, {useState, useEffect, useContext}from "react";
import { StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";
import AxiosInstance from "../../api/AxiosInstance";
import { AutenticacaoContext } from "../../context/AutenticacaoContext";
import { CategoriaContext } from "../../context/CategoriaContext";

export const SearchBar = () => {
  const [busca, setBusca]=useState('');
  const { usuario } = useContext(AutenticacaoContext);
  const {categoria, setCategoria} = useContext(CategoriaContext);

  useEffect(() => {
    buscarCategoria(busca);
}, [busca])

const getDadosCategoria = async () => {
    AxiosInstance.get(
        `/categoria`,
        { headers: { "Authorization": `Bearer ${usuario.token}` } }
    ).then(result => {
        setCategoria(result.data);
    }).catch((error) => {
        console.log("Erro ao carregar a lista de categorias - " + JSON.stringify(error));
    });
}

  const buscarCategoria = (busca: string) => {
    if (busca !== '') {
        setCategoria(
            categoria.filter
                (res => res.nomeCategoria.toLowerCase().includes(busca.toLowerCase())));
    } else {
        getDadosCategoria();
    }
}

  return (
    <Input
      placeholder="ex.:Categoria x"
      leftIcon={<Icon name="search" color="#00000080" type="font-awesome" size={24} />}
      rightIcon={<Icon name="sliders" color="#00000080" type="font-awesome" size={24} />}  onChangeText={setBusca}
      value={busca}
      inputContainerStyle={styles.input_container}
    />
  )
}

const styles = StyleSheet.create({
  input_container: {
    width:'100%',
    backgroundColor:'#fff',
    paddingVertical:0,
    paddingHorizontal:5,
    margin: 0
  }
});
