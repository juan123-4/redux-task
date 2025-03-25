import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
 
};
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
        state.tasks.push(action.payload);
      
    },
    deleteTask: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      },
  },
});

export const { addTask, deleteTask} = todosSlice.actions;
export default todosSlice.reducer;
