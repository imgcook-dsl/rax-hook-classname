import { createElement, createContext, useReducer } from 'rax';

const initState = {
  txt: 'click me' // Get data, trigger proactively useEffect
};

function UserReducer(state, action) {
  switch (action.type) {
    case 'changeTxt':
      return {
        ...state,
        txt: `click me ${action.payload.val}`
      };
    default:
      return state;
  }
}

const IndexContext = createContext();

const IndexProvider = props => {
  const [state, dispatch] = useReducer(UserReducer, initState);
  return <IndexContext.Provider value={{ state, dispatch }}>{props.children}</IndexContext.Provider>;
};

export { IndexContext, IndexProvider };
