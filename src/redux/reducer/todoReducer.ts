import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Task} from '../../model/task';
import {saveTaskListToStorage} from '../../utils/asyncStorage';

interface TodoState {
  todoList: Task[];
}

const initialState: TodoState = {
  todoList: [],
};

export const fetchTodoList = createAsyncThunk(
  'todoList/fetchTodo',
  async () => {
    const todoString = await AsyncStorage.getItem('@task');
    console.log('🚀 ~ todoString:', todoString);
    if (todoString) {
      return JSON.parse(todoString);
    }
    return [];
  },
);

const todo = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Task>) => {
      console.log('🚀 ~ action:', [...state.todoList, {...action.payload}]);
      console.log('🚀 ~ todoList:', state.todoList);
      state.todoList.push(action.payload);
      saveTaskListToStorage([...state.todoList]);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    priorityTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isPriority = !todo.isPriority;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        todo => todo.id !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodoList.pending, state => {})
      .addCase(
        fetchTodoList.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.todoList = action.payload;
        },
      )
      .addCase(fetchTodoList.rejected, state => {});
  },
});

export const {addTodo, toggleTodo, deleteTodo, priorityTodo} = todo.actions;
const todoReducer = todo.reducer;
export default todoReducer;
