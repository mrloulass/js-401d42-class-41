import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
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
      <Card
        data={countriesData}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <Card.Title>{item.name}</Card.Title>}>
         <Card.Divider />
        <Card.Image source={item.flag}>
        <Text>{`The capital of ${item.name} is ${item.capital}`}</Text>
        </Card.Image>
      </Card>
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

