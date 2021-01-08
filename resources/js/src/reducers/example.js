const initstate = {
  string: '222222',
  int: 1,
  array: [
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    },
    {
      text: 'Use Redux1111',
      completed: true,
      id: 1
    }
  ],
  object: {
    id: 1,
    text: 'test'
  }
}

export function exampleState(state = initstate, action) {
  const initState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'GET_ARRAY': {
      return initState.array;
    }
    case 'GET_OBJECT': {
      return initState.object;
    }
    case 'GET_STRING': {
      return initState.string;
    }
    case 'GET_INT': {
      return initState.int;
    }
    default:
      return initState
  }
}