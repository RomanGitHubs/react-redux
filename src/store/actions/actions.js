export const Filters = {
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

export const addTodo = text => ({
  text,
  type: 'ADD_TODO',
});

export const toggleTodo = id => ({
  id,
  type: 'TOGGLE_TODO',
});

export const allToggleTodo = isChecked => ({
  isChecked,
  type: 'ALL_TOGGLE_TODO',
});

export const deleteTodo = id => ({
  id,
  type: 'DELETE_TODO',
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED',
});

export const setFilter = filter => ({
  filter,
  type: 'SET_FILTER',
});

export const editTodo = (value, id) => ({
  id,
  type: 'EDIT_TODO',
  value,
});
