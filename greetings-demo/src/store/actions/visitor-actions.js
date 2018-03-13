export const Actions = {
  VISITOR_SELECTED: 'VISITOR_SELECTED',
};

function selectedVisitorAction(visitor) {
  return {
    type: Actions.VISITOR_SELECTED,
    payload: visitor
  };
}

export function selectVisitor(visitor) {
  return (dispatch) => {
    dispatch(selectedVisitorAction(visitor));
  };
}
