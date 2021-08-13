import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { Text, Card, ListItem, Button, Icon } from 'react-native-elements';


export default function App() {

  const [countriesData, setContriesData] = useState('')


  function Countries() {
    fetch('https://restcountries.eu/rest/v2/region/americas?fields=name;capital;flag')
      .then((response) => response.json())
      .then((json) => setContriesData(json))
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    Countries();
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Travel the World</Text>
      <FlatList
        data={countriesData}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.name}
        renderItem={({ item }) => 
        <Button onPress={()=>item.name.capital}
          title="Solid Button"
          title={item.name}
          size={15}
          color="white">
          </Button>}>
        {/* <Image
          source={{uri:'https://restcountries.eu/rest/v2/region/americas?fields=flag'}} 
          style={{ width: 40, height: 40 }}/> */}
      </FlatList>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingTop: 30,
  },
  button: {
    fontSize: 20,
    margin: 10
  },
});

