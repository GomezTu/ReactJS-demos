import { FilterActions } from '../actions/actions'

export const filter = (state = FilterActions.SHOW_ALL, action) => {
    switch (action.type) {
        case FilterActions.SET_FILTER:
            return action.filter
        default:
            return state
    }
}