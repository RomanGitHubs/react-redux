import { Filters } from '../actions/actions';

const initState = {
  todos: [],
  filter: Filters.SHOW_ALL,
}

const listTodos = (state = initState, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Math.random(),
          text: action.text,
          isChecked: false,
      }]}

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? {...todo, isChecked: !todo.isChecked}
            : todo
        )
      }

    case 'ALL_TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((item) => {
          return { ...item, isChecked: action.isChecked}
        })
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id)
      }

    case 'EDIT_TODO':
      return { ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id) {
            return { ...item, text: action.value}
          }
          return item
        })
      }

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isChecked)
      }

    case 'SET_FILTER':
     return {
       ...state,
       filter: action.filter,
     }

    default:
      return state
  }
};

export default listTodos
