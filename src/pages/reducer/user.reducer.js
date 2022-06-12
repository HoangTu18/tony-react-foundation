
// initial state
export const initialState = {
  isLoading: false,
  todos: [],
  isError: false
}

// actions
export function setIsLoading(isLoading) {
  return {
    type: 'SET_IS_LOADING',
    payload: isLoading
  }
}

export function setIsError(isError) {
  return {
    type: 'SET_IS_ERROR',
    payload: isError
  }
}

export function setTodos(data) {
  return {
    type: 'SET_TODO',
    payload: data
  }
}

// reducer
export function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case 'SET_IS_LOADING': {
      return {
        ...state,
        isLoading: payload
      }
    }
    case 'SET_IS_ERROR': {
      return {
        ...state,
        isError: payload
      }
    }
    case 'SET_TODO': {
      return {
        ...state,
        todos: payload
      }
    }
    default: 
      return state
  }
}
