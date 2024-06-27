import {StyleSheet , Text, TextInput, View,TouchableOpacity, FlatList} from 'react-native'
import React from 'react';
import { IconButton } from 'react-native-paper';

const dummyData=[
    {
        id:"01",
        title:"Wash Car",
    },
    {
        id:"02",
        title:"Read A book",
    }
]
const TodoScreen=()=>{
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
                <IconButton icon="pencil" iconColor='#000'/>
                <IconButton icon="trash-can" iconColor='#fff'/>
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
                    />

            <TouchableOpacity 
                style={{
                        backgroundColor:"#000",
                        borderRadius:6, 
                        paddingVertical:8,
                        marginVertical:34,
                        alignItems:"center",
                        }}
                    >
                         <Text style={{
                            color:"#fff",
                            fontWeight:"bold",
                            fontSize:20,
                            }}>Add</Text> 
             </TouchableOpacity>

             {/* Render todo list  */}
           <FlatList data={dummyData} renderItem={renderTodos} /> 
        </View>
    )
}

export default TodoScreen;

const styles = StyleSheet.create({})