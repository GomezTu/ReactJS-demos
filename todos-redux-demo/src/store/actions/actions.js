//Posible Actions Definition
export const FilterActions = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SET_FILTER: 'SET_FILTER'
}

export const TodoActions = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
}

//Posible Actions
let nextTodoId = 0

export const addTodo = (text) => ({
    type: TodoActions.ADD_TODO,
    id: nextTodoId++,
    text
})

export const toggleTodo = (todo) => ({
    type: TodoActions.TOGGLE_TODO,
    todo
})

export const setFilter = (filter) => ({
    type: FilterActions.SET_FILTER,
    filter
})