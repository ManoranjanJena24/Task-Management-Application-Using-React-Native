// screens/TaskListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [sortOption, setSortOption] = useState('title');
  const [filterKeyword, setFilterKeyword] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        setTasks(sortTasks(filterTasks(tasks)));
      }
    };
    fetchTasks();
  }, [sortOption, filterKeyword]);

  const sortTasks = (tasks) => {
    return [...tasks].sort((a, b) => a[sortOption].localeCompare(b[sortOption]));
  };

  const filterTasks = (tasks) => {
    return tasks.filter(task => task.title.toLowerCase().includes(filterKeyword.toLowerCase()));
  };

  const handleTaskPress = (task) => {
    navigation.navigate('TaskDetails', { task });
  };

  return (
    <View>
      <TextInput
        placeholder="Search by title"
        value={filterKeyword}
        onChangeText={setFilterKeyword}
        style={{ padding: 10, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Sort by Title" onPress={() => setSortOption('title')} />
      <Button title="Sort by Due Date" onPress={() => setSortOption('dueDate')} />
      <Button title="Add Task" onPress={() => navigation.navigate('TaskCreation')} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTaskPress(item)}>
            <View style={{ padding: 10, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              <Text style={{ color: 'gray' }}>{item.dueDate}</Text>
              <Text style={{ color: 'blue' }}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TaskListScreen;