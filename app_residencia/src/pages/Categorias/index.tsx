import React from "react";
import {StyleSheet, ScrollView } from "react-native";
import { SearchBar } from "../../components/Search";
import { Input, Icon, Text } from "react-native-elements";

const Categorias = () => {

  return (
    <ScrollView style={styles.container}>
      <SearchBar />      
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
export default Categorias;