export function onSubmitSearch(search) {
  return{
    type: "SUBMIT_SEARCH",
    payload: search
  }
}

export function onTypeSearch(text) {
  return{
    type: "TYPE_SEARCH",
    payload: text
  }
}
