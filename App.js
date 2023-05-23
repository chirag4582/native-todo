import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [task,setTask]=useState('')
  const [List,setList] = useState([])
  
  const Addtask = ()=>{
    if (task && task.length>3){setList([...List,{
      name:task,id:Math.random().toString()
    }])
    console.log(List)}
    else{
      Alert.alert(
        'Hey','what u doing man?',[{
          text:'Understood',onPress: ()=>{console.log('alert closed')}
        }]
      )
    }
  }

  const deleteitem = (e)=>{
    setList(
      List.filter((tasks)=>{
        return tasks.id !==e
      })
    )
  }

  const Header = ()=>{
    return(
      <View style={styles.header}>
        <Text style={styles.headerTitle} >My Todo List </Text>
      </View>
    )
  }


  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()} }>
    <View  style={styles.container}>
      <Header/>
      <TextInput style={styles.TextInput} 
        placeholder={'Add task'}
        onChangeText={(e)=>{setTask(e)}}
      />
      <View style={styles.button}>
      <Button onPress={()=>{Addtask()}} title={'Add task'} />
      </View>
      <View>
      <FlatList 
        data={List}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.List}>
              <Text>{item.name}</Text>
              <Button title='Delete' onPress={()=>{deleteitem(item.id)}} />
          </View>
        )}
      />

      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    marginTop:25
  },
  header:{
    alignItems:'center',
    backgroundColor:"coral",
    flex:0.05,
    justifyContent:'center',
  },
  headerTitle:{
    fontSize:20,
    fontWeight:400,
    color: 'indigo'
  },
  TextInput:{
    backgroundColor:'white',
    flex:0.09,
    borderColor:'black',
    paddingHorizontal:10,
    borderStyle:'dotted',
    borderWidth:2,
    margin:10 
  },
  button:{
    marginHorizontal:50,
  },
  List:{
    backgroundColor:'gray',
    alignItems:'center',
    padding:10,
    margin:10,
    backgroundColor:'coral',
    justifyContent:'space-between',
    flexDirection:'row'
  }
});
