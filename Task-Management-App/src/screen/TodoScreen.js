import {StyleSheet , Text, TextInput, View,TouchableOpacity, FlatList} from 'react-native'
import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';


console.log(Date.now().toString())
const TodoScreen=()=>{

    //Init local states
    const[todo , setTodo] = useState("")
    const[todoList,setTodoList]=useState([])

    //Handle Add Todo

    const handleAddTodo = ()=>{
    //    structure of single todo item 
    //      {
    //       id:
    //       title:
    //      }
    setTodoList([...todoList,{id:Date.now().toString(),title:todo }])
    setTodo("")
      
    }

    //Handle Delete

    const handleDeleteTodo = (id)=>{
        const updatedTodoList=todoList.filter((todo)=>todo.id !== id)
        setTodoList(updatedTodoList);
          
        }
    //Render Todo
    const renderTodos = ({item , index})=>{
        return(
            <View 
                style={{
                    backgroundColor:"#1e90ff",
                    borderRadius:6,
                    paddingHorizontal:6,
                    paddingVertical:12,
                    marginBottom:12,
                    flexDirection:"row",
                    alignItems:"center"

                    }}>
                <Text style={{color:"#fff",fontSize:20,fontWeight:"800",flex:1}}>{item.title}</Text>
                <IconButton icon="pencil" iconColor='#505050'/>
                <IconButton 
                    icon="trash-can" 
                    iconColor='#F0F0F0' 
                    onPress={()=>handleDeleteTodo(item.id)}
                />
            </View>
        )
    }
    return(
        <View style={{marginHorizontal:16}}>
            <Text style={{marginTop:50,marginBottom:20,fontWeight:"bold",fontSize:40}}>Task Flow</Text>
            <TextInput 
                style={{
                        borderWidth:2,
                        borderColor:"#1e90ff",
                        borderRadius:6,
                        paddingVertical:6,
                        paddingHorizontal:16
                        }}
                        placeholder='Add a task'
                        value={todo}
                        onChangeText={(userText)=>setTodo(userText)}
                    />

            <TouchableOpacity 
                style={{
                        backgroundColor:"#000",
                        borderRadius:6, 
                        paddingVertical:8,
                        marginVertical:34,
                        alignItems:"center",
                        }}
                        onPress={()=>handleAddTodo()}
                    >
                         <Text style={{
                            color:"#fff",
                            fontWeight:"bold",
                            fontSize:20,
                            }}>Add</Text> 
             </TouchableOpacity>

             {/* Render todo list  */}
           <FlatList data={todoList} renderItem={renderTodos} /> 
        </View>
    )
}

export default TodoScreen;

const styles = StyleSheet.create({})