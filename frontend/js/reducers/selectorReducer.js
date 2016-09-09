export default function reducer(state = {
  selection: "all"
}, action) {
  switch (action.type) {
    case "FETCH_SELECTION":{
      return state;
    }
    case "CHANGE_SELECTION":{
      return{
        ...state,
        selection: action.payload};
    }



  }
  return state;
}
