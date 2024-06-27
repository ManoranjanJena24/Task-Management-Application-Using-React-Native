import { StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { IconButton } from 'react-native-paper';
import Fallback from '../components/Fallback';
import { Picker } from '@react-native-picker/picker';

const TodoScreen = () => {
  // Init local states
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("todo");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Handle Add Todo
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

  // Handle Delete
  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  // Handle Edit Todo
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
    setDescription(todo.description);
    setDueDate(todo.dueDate);
    setStatus(todo.status);
  };

  // Handle Update
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

  // Render Todo
  const renderTodos = ({ item }) => (
    <View style={styles.todoContainer}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text style={styles.todoDescription}>{item.description}</Text>
      <Text style={styles.todoDueDate}>Due: {item.dueDate}</Text>
      <Text style={styles.todoStatus}>Status: {item.status}</Text>
      <IconButton icon="pencil" iconColor='#505050' onPress={() => handleEditTodo(item)} />
      <IconButton icon="trash-can" iconColor='#F0F0F0' onPress={() => handleDeleteTodo(item.id)} />
    </View>
  );

  // Filter and Search Logic
  const filteredTodos = todoList.filter((todo) => {
    return (filterStatus === "all" || todo.status === filterStatus) && todo.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text style={styles.header}>Task Flow</Text>
      <TextInput
        style={styles.input}
        placeholder='Task Title'
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      <TextInput
        style={styles.input}
        placeholder='Description'
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Due Date (YYYY-MM-DD)'
        value={dueDate}
        onChangeText={(text) => setDueDate(text)}
      />
      <Picker
        selectedValue={status}
        style={styles.picker}
        onValueChange={(itemValue) => setStatus(itemValue)}
      >
        <Picker.Item label="Todo" value="todo" />
        <Picker.Item label="In Progress" value="in-progress" />
        <Picker.Item label="Done" value="done" />
      </Picker>
      {editedTodo ? (
        <TouchableOpacity style={styles.button} onPress={handleUpdateTodo}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.input}
        placeholder='Search by title'
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Picker
        selectedValue={filterStatus}
        style={styles.picker}
        onValueChange={(itemValue) => setFilterStatus(itemValue)}
      >
        <Picker.Item label="All" value="all" />
        <Picker.Item label="Todo" value="todo" />
        <Picker.Item label="In Progress" value="in-progress" />
        <Picker.Item label="Done" value="done" />
      </Picker>
      <FlatList data={filteredTodos} renderItem={renderTodos} keyExtractor={(item) => item.id} />
      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 40
  },
  input: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 6
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 6
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  todoContainer: {
    backgroundColor: "#1e90ff",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 8,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  todoTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
    flex: 1
  },
  todoDescription: {
    color: "#fff",
    fontSize: 16,
    flex: 1
  },
  todoDueDate: {
    color: "#fff",
    fontSize: 14,
    flex: 1
  },
  todoStatus: {
    color: "#fff",
    fontSize: 14,
    flex: 1
  }
});
