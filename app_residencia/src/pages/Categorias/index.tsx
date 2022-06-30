import React from "react";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import { SearchBar } from "../../components/Search";
import { Input, Icon, Text } from "react-native-elements";

const Categorias = () => {

  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      {/* <View style={styles.container_images}>
        <Image style={styles.images} source={require('../../assets/Icon_table.png')} />
        <Image style={styles.images} source={require('../../assets/Icon_microwave.png')} />
        <Image style={styles.images} source={require('../../assets/Icon_armchair.png')} />
        <Image style={styles.images} source={require('../../assets/Icon_closet.png')} />
        <Image style={styles.images} source={require('../../assets/Icon_washing_machine.png')} />
        <Image style={styles.images} source={require('../../assets/Icon_television.png')} />
        <Image style={styles.images} source={require('../../assets/Icon_BBQ.png')} />
        <Image style={styles.images} source={require('../../assets/Icon_refrigerator.png')} />
      </View> */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bba3f8',
    padding: 15,
    margin: 0,
  },
  container_images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding:0,
    margin:0,
    justifyContent:'space-between',
  },
  images: {
    width: 150,
    height:150
  }
})
export default Categorias;