import {StyleSheet , Text, TextInput, View,TouchableOpacity, FlatList} from 'react-native'
import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback';


console.log(Date.now().toString())
const TodoScreen=()=>{

    //Init local states
    const[todo , setTodo] = useState("");
    const[todoList,setTodoList]=useState([]);
    const [editedTodo,setEditedTodo]=useState(null);

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
                    paddingVertical:8,
                    marginBottom:12,
                    flexDirection:"row",
                    alignItems:"center",
                    // shadowColor:"#000",
                    // shadowOffset:{width:0,height:12},
                    // shadowOpacity:1,
                    // shadowRadius:5,
                    // elevation:1

                    }}>
                <Text style={{color:"#fff",fontSize:20,fontWeight:"800",flex:1}}>{item.title}</Text>
                <IconButton icon="pencil" 
                    iconColor='#505050' 
                    onPress={()=>handleEditTodo()}

                />
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
                        paddingVertical:8,
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
                        paddingVertical:12,
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
           {
            todoList.length <=0 && <Fallback/>

           }
        </View>
    )
}

export default TodoScreen;

const styles = StyleSheet.create({})