import { Actions as registrationActions } from '../store/actions/register-actions';
import { selectVisitor } from '../store/actions/visitor-actions';

export const registrationMiddleware = store => next => action => {
    if(action.type === registrationActions.REGISTRATION_SAVE ) {
        store.dispatch(selectVisitor(action.payload));
    }

    next(action);
}