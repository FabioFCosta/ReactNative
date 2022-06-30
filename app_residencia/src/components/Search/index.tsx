import React from "react";
import { StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";

export const SearchBar = () => {

  return (
    <Input
      placeholder="ex.:Produto x"
      leftIcon={<Icon name="search" color="#00000080" type="font-awesome" size={24} />}
      rightIcon={<Icon name="sliders" color="#00000080" type="font-awesome" size={24} />} autoCorrect={false}
      autoComplete='off'
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
