import { Actions } from './filter-actions'
import _ from 'lodash'

function FilterChange(filter) {
    return {
        type: Actions.FILTER_CHANGE,
        payload: filter
    }
}

export function FilterChangeAction(filter){
    return (dispatch) => {
        dispatch(FilterChange(filter));
    }
}