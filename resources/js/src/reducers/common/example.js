const initState = {
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

export function exampleState(state = initState, action) {
  // const initState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'CHANGE_ARRAY': {
      let changeArray = [
        {
          text: 'Use Redux balabala',
          completed: true,
          id: 999999999999999
        },
        {
          text: 'Use Redux1111 bilibili',
          completed: false,
          id: 888888888888888
        }
      ]
      state.array = changeArray;
      return state;
    }
    case 'CHANGE_OBJECT': {
      let changeObject = {
        id: 1234,
        text: 'test1234',
        aaasss: '喵喵喵'
      };
      state.object = changeObject;
      return state;
    }
    case 'CHANGE_STRING': {
      state.string = 'zzzz';
      return state;
    }
    case 'CHANGE_INT': {
      state.int = 123;
      return state;
    }
    default:
      return state;
  }
}