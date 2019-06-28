import React, { useState } from 'react'
import globalContext from './globalContext';
import { ThemeProvider } from "styled-components";
import { dayTheme, darkTheme, GlobalStyle } from '../style/globalStyles';

const { Provider } = globalContext;

const GlobalStore = ({ children = undefined }) => {
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState(dayTheme);
  const [userID, setUserID] = useState('1')

  const changeTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark ? darkTheme : dayTheme)
  }

  return (
    <Provider
      value={{
        state: {
          userID
        },
        actions: {
          setUserID,
          changeTheme
        }
      }}
    >
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          {children}
        </React.Fragment>
      </ThemeProvider>
    </Provider>
  )
}

export default GlobalStore
