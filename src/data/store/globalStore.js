import React from 'react'
import {
  GlobalStateProvider,
  GlobalActionsProvider
} from './globalContext';

// import { Grommet, grommet } from 'grommet';
// import { dark } from '../style/darkTheme'
// import { hp } from '../style/hp';

const initialState = {
  theme: 0
};

// const themes = [grommet, dark, hp]

const GlobalStore = ({ children = undefined }) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  return (
    <GlobalStateProvider
      value={state}
    >
      <GlobalActionsProvider
        value={dispatch}
      >
        {/* <Grommet theme={themes[state.theme]} full className='ThemeProvider'> */}
          {children}
        {/* </Grommet> */}
      </GlobalActionsProvider>
    </GlobalStateProvider>
  )
}

const Reducer = (state, action) => {
  try {
    switch (action.type) {
      case 'SET_THEME': {
        return {
          ...state,
          theme: action.theme
        }
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export default GlobalStore;