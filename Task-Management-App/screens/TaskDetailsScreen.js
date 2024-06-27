// screens/TaskDetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetailsScreen = ({ route, navigation }) => {
  const { task } = route.params;

  const deleteTask = async () => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = JSON.parse(storedTasks);
    const updatedTasks = tasks.filter(t => t.id !== task.id);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    navigation.goBack();
  };

  const updateStatus = async (newStatus) => {
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = JSON.parse(storedTasks);
    const updatedTasks = tasks.map(t => t.id === task.id ? { ...t, status: newStatus } : t);
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    navigation.goBack();
  };

  return (
    <View>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>{task.dueDate}</Text>
      <Text>{task.status}</Text>
      <Button title="Delete Task" onPress={deleteTask} />
      <Button title="Mark as Done" onPress={() => updateStatus('done')} />
    </View>
  );
};

export default TaskDetailsScreen;