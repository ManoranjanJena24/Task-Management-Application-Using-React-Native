import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Fallback from '../components/Fallback';
import todoScreenStyles from './TodoScreenStyles';

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("todo");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const handleAddTodo = () => {
    if (todo === "" || description === "" || dueDate === "") {
      return;
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo, description, dueDate, status }]);
    setTodo("");
    setDescription("");
    setDueDate("");
    setStatus("todo");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
    setDescription(todo.description);
    setDueDate(todo.dueDate);
    setStatus(todo.status);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo, description, dueDate, status };
      }
      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
    setDescription("");
    setDueDate("");
    setStatus("todo");
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, status: newStatus };
      }
      return item;
    });
    setTodoList(updatedTodos);
  };

  const renderTodos = ({ item }) => (
    <View style={todoScreenStyles.todoContainer}>
      <Text style={todoScreenStyles.todoTitle}>{item.title}</Text>
      <Text style={todoScreenStyles.todoDescription}>{item.description}</Text>
      <Text style={todoScreenStyles.todoDueDate}>Due: {item.dueDate}</Text>
      <Text style={todoScreenStyles.todoStatus}>Status: {item.status}</Text>
      <Picker
        selectedValue={item.status}
        style={todoScreenStyles.statusPicker}
        onValueChange={(value) => handleStatusChange(item.id, value)}
      >
        <Picker.Item label="Todo" value="todo" />
        <Picker.Item label="In Progress" value="in-progress" />
        <Picker.Item label="Done" value="done" />
      </Picker>
      <IconButton icon="pencil" iconColor='#505050' onPress={() => handleEditTodo(item)} />
      <IconButton icon="trash-can" iconColor='#F0F0F0' onPress={() => handleDeleteTodo(item.id)} />
    </View>
  );

  const filteredTodos = todoList.filter((todo) => {
    return (filterStatus === "all" || todo.status === filterStatus) && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <ScrollView style={{ marginHorizontal: 16 }}>
      <Text style={todoScreenStyles.header}>Task Flow</Text>
      <TextInput
        style={todoScreenStyles.input}
        placeholder='Task Title'
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      <TextInput
        style={todoScreenStyles.input}
        placeholder='Description'
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={todoScreenStyles.input}
        placeholder='Due Date (YYYY-MM-DD)'
        value={dueDate}
        onChangeText={(text) => setDueDate(text)}
      />
      <Picker
        selectedValue={status}
        style={todoScreenStyles.picker}
        onValueChange={(itemValue) => setStatus(itemValue)}
      >
        <Picker.Item label="Todo" value="todo" />
        <Picker.Item label="In Progress" value="in-progress" />
        <Picker.Item label="Done" value="done" />
      </Picker>
      {editedTodo ? (
        <TouchableOpacity style={todoScreenStyles.button} onPress={handleUpdateTodo}>
          <Text style={todoScreenStyles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={todoScreenStyles.button} onPress={handleAddTodo}>
          <Text style={todoScreenStyles.buttonText}>Add</Text>
        </TouchableOpacity>
      )}
      <TextInput
        style={todoScreenStyles.input}
        placeholder='Search by title'
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Picker
        selectedValue={filterStatus}
        style={todoScreenStyles.picker}
        onValueChange={(itemValue) => setFilterStatus(itemValue)}
      >
        <Picker.Item label="All" value="all" />
        <Picker.Item label="Todo" value="todo" />
        <Picker.Item label="In Progress" value="in-progress" />
        <Picker.Item label="Done" value="done" />
      </Picker>
      <FlatList data={filteredTodos} renderItem={renderTodos} keyExtractor={(item) => item.id} />
      {todoList.length <= 0 && <Fallback />}
    </ScrollView>
  );
};

export default TodoScreen;
