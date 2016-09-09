export function fetchSelection() {
  return{
    type: "FETCH_SELECTION"
  }
}

export function changeSelected(selection) {
  return{
    type: "CHANGE_SELECTION",
    payload: selection
  }
}
