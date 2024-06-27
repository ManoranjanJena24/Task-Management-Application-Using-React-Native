// screens/TaskCreationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskCreationScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleCreateTask = async () => {
    if (!title) {
      alert('Title is required');
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      dueDate,
      status: 'todo'
    };

    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];
    tasks.push(newTask);
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));

    navigation.goBack();
  };

  return (
    <View>
      <Text>Title</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Description</Text>
      <TextInput value={description} onChangeText={setDescription} />
      <Text>Due Date</Text>
      <TextInput value={dueDate} onChangeText={setDueDate} />
      <Button title="Create Task" onPress={handleCreateTask} />
    </View>
  );
};

export default TaskCreationScreen;