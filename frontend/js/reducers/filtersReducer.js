export default function reducer(state = {
    filters: {
      employment_term: {
        fulltime: {
          class: "",
          state: true
        },
        parttime: {
          class: "",
          state: true
        },
        contract: {
          class: "",
          state: true
        },
        project: {
          class: "",
          state: true
        },
        internship: {
          class: "",
          state: true
        }
      },
      criteria: {
      }
    },
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
