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
      initState.array = changeArray;
      return initState;
    }
    case 'CHANGE_OBJECT': {
      let changeObject = {
        id: 1234,
        text: 'test1234',
        aaasss: '喵喵喵'
      };
      initState.object = changeObject;
      return initState;
    }
    case 'CHANGE_STRING': {
      initState.string = 'zzzz';
      return initState;
    }
    case 'CHANGE_INT': {
      initState.int = 123;
      return initState;
    }
    default:
      return initState
  }
}