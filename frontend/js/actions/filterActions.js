export function fetchFilters() {
  return {
    type:"FETCH_STORED_FILTERS"
  }
}

export function editFilters( newFilters ) {
  return {
    type:"EDIT_STORED_FILTERS",
    payload: newFilters
  }
}
