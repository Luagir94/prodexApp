import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, FlatList,StatusBar,Platform, KeyboardAvoidingView} from 'react-native';

export default function App() {
  const [list, setList] = useState([])
  const [itemToAdd, setItemToAdd] = useState('')


  useEffect(() => {
    console.log(list);
  }, [list])

  const addItem = (item) => {
    if (item.length) {
      const id = Math.round(Math.random() * 10000)
      setList([...list, { name: item, id }])
      setItemToAdd('')
    }
  }
  const deleteItem = (id) => {
    setList(list.filter((x) => x.id !== id))

  }

  const Item = ({ item }) => (

    <View style={styles.item}>
      <Text>{item.name}</Text>
      <TouchableHighlight
        activeOpacity={0.6}
        style={styles.item.button}
        underlayColor="#DDDDDD"
        onPress={() => deleteItem(item.id)}>
        <Text style={styles.button.text}>-</Text>
      </TouchableHighlight>
    </View>
  );
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={styles.container}
  >
    <View  style={styles.container}>
      
      <View style={styles.inputContainer} >
        <Text style={styles.inputContainer.text} >Introduce un nuevo Item</Text>
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            onChangeText={setItemToAdd}
            value={itemToAdd}
          />
          <TouchableHighlight
            activeOpacity={0.6}
            style={styles.button}
            underlayColor="#DDDDDD"
            onPress={() => addItem(itemToAdd)}>
            <Text style={styles.button.text}>+</Text>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.listItem} >
    
        
         <FlatList
          data={list}
          renderItem={Item}
          keyExtractor={item => item.id}
        /> 

      </View>


    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'stretch',
 
  },
  inputContainer: {
    flex: 0,
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    text: {
      alignSelf: 'flex-start',
      paddingLeft: '5%',
      marginBottom: 10
    }

  }, input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '75%',
    borderRadius: 6,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#027af2',
    text: {
      color: 'white',
    }

  }
  ,
  inputField: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  listContainer: {
    flex: 1,
    width: '100%',
    height: 100,
    overflow: 'hidden',
    marginTop: 2000,
    
  },
   listItem: {
    height: 200,
    width: '75%',
    marginTop: 20,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '5%',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    padding: '1%'
  },
  item: {
    height: 60,
    width: '75%',
    borderRadius: 6,
    backgroundColor: '#cfd0d1',
    padding: '2%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    button:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      backgroundColor: 'red',
    }
  }
});
