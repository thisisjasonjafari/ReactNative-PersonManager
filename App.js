import React, { useState, version } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';




const App = () => {
  const [firstName, serFirstName] = useState('Jason')

  const [fullname, setFullname] = useState();
  const [age, setAge] = useState();


  const handleNameChange = () => {
    serFirstName('Sara')
  }
  return (
    <View style={styles.container} >

      <View style={{
        marginBottom: 30,
        backgroundColor: "orange",
        padding: 20,
        borderRadius: 10
      }}>
        <Text style={styles.lable}>Name and Family Name:   {fullname}</Text>
        <Text style={styles.lable}>Age:  {age}</Text>
      </View>
      <Text style={styles.lable}>Name and FamilyName:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="for exam Jason" 
        multiline
        placeholderTextColor="teal"
        onChangeText={(val)=>{
          setFullname(val)
        }}
      />
      <Text style={styles.lable}>How many Years old do do you have?</Text>
      <TextInput
        style={[styles.textInput, { width: 100 }]}
        keyboardType="numeric"
        placeholder="For exam 30"
        placeholderTextColor="teal"
        onChangeText={value => setAge(value)}
      />
      {/* <View style={styles.header}>
        <Text style={styles.Jasontext}>Jason - Jafari </Text>
      </View>
      <View>
        <Text style={styles.body}>Hello {firstName}</Text>
        <Button title="Click" onPress={handleNameChange} />

      </View> */}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "purple",
    padding: 20
  },
  Jasontext: {
    color: "#fff",
    fontWeight: "bold"
  },
  body: {
    fontSize: 20,
    padding: 20,
    margin: 20
  },
  lable: {
    fontSize: 17,
    fontWeight: "bold"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 5,
    margin: 10,
    width: 250,
    textAlign: "center",
    fontSize: 15,
  }

})

export default App;