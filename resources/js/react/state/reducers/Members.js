const initialState = [
  
]

const members = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ];
      default:
        return state;
    };
  };
  
  export default members;
