import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { db } from './Core/Config'

export default function App() {

  const [userDoc, setUserDoc] = useState(null)
  const [text, setText] = useState("")

  const Create = () => {
    const myDoc = doc(db, "MyCollection", "MyDocument")

    const docData = {
      "name": "Izaac",
      "bio": "Developer",
    }

    setDoc(myDoc, docData)
      .then(() => {
        alert("Cadastro criado com sucesso!")
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const Read = () => {
    const myDoc = doc(db, "MyCollection", "MyDocument")

    getDoc(myDoc)
      .then((snapshot) => {
        if (snapshot.exists) {
          setUserDoc(snapshot.data())
        }
        else {
          alert("Nenhum cadastro encontrado!")
        }
      })
      .catch((error) => {
        alert(error.message)
      })

  }

  const Update = (value, merge) => {
    const myDoc = doc(db, "MyCollection", "MyDocument")

    setDoc(myDoc, value, { merge: merge })
      .then(() => {
        alert("Cadastro atualizado com sucesso!")
        setText("")
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const Delete = () => {
    const myDoc = doc(db, "MyCollection", "MyDocument")

    deleteDoc(myDoc)
      .then(() => {
        alert("Cadastro excluído com sucesso!")
      })
      .catch((error) => {
        alert(error.message)
      })

  }

  return (
    <View style={styles.container}>
      <Button title='Create New Doc' onPress={Create}></Button>
      <Button title='Read Doc' onPress={Read}></Button>
      {
        userDoc != null &&
        <Text>Bio: {userDoc.bio}</Text>
      }
      <TextInput style={{
        width: '95%',
        fontSize: 18,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 30,
        marginVertical: 20
      }} placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

      <Button title='Update Doc' onPress={() => {
        Update({
          "bio": text
        }, true)
      }} disabled={text == ""}></Button>
      <Button title='Delete Doc' onPress={Delete}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
