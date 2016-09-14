export default function reducer(state = {
    filterCriteria: [],

  },
  action)
  {
    switch (action.type) {
      case "FETCH_STORED_FILTERS":{
        return {...state};
      }
      case "EDIT_STORED_FILTERS":{
        return {
          ...state,
          filters: action.payload
        };
      }
    }
    return state;
  }
