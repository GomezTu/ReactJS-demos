import { combineReducers } from 'redux'
import todos from './to-dos'
import { filter as VisibilityFilter } from './filter'

const reducer = combineReducers({
    todos: todos,
    filter: VisibilityFilter
})

export const rootReducer = combineReducers({
    reducer
})