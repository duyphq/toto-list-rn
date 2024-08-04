import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from 'react-native';

export const saveTaskListToStorage = async (taskList: Task[]) => {
  try {
    await AsyncStorage.setItem('@task', JSON.stringify(taskList));
  } catch (error) {
    console.error('Error saving todo to storage', error);
  }
};

export const getTaskListToStorage = async (taskList: Task[]) => {
  try {
    await AsyncStorage.setItem('@task', JSON.stringify(taskList));
  } catch (error) {
    console.error('Error saving todo to storage', error);
  }
};
