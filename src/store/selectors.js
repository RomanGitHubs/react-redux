import { createSelector } from 'reselect';

const todosSelector = state => state.listTodos.todos;
const filterSelector = state => state.listTodos.filter;

export const selector = createSelector(
  [
    todosSelector, filterSelector,
  ],
  (todos, filter) => {
    if (filter === 'SHOW_ACTIVE') {
      return todos.filter(item => !item.isChecked);
    }
    if (filter === 'SHOW_COMPLETED') {
      return todos.filter(item => item.isChecked);
    }

    return todos;
  }
);

