import { Actions } from '../actions/filter-actions'

export const FilterReducer = (state = {}, action) => {
    switch(action.type){
        case Actions.FILTER_CHANGE:
            return action.payload;
        default:
            return state;
    }
}