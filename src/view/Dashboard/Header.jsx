import React from 'react';
import { Box, Button, Text, Menu } from "grommet";
import { history } from '../../router/router'
import tokenService from '../../router/token';

import Logo from '../Assets/logo.png';

function Header({ setSidebar, sidebar, email }) {
  const logOut = () => {
    tokenService.delete()
    history.replace(`/`)
  }

  const toProfile = () => {
    history.replace(`/dashboard/perfil`)
  };

  return (
    <Nav>
      <Button onClick={() => setSidebar(!sidebar)}>
        <img src={Logo} alt='SEOSEMAPI' height='35px'/>
      </Button>
      <Menu
        label={<Text color='blue'>Hello, <b>{email}</b></Text>}
        items={[
          { label: 'Perfil', onClick: () => toProfile() },
          { label: 'LogOut', onClick: () => logOut() }
        ]}
      />
    </Nav>
  )
}

export default Header;

const Nav = ({ children = undefined, ...rest }) => (
  <Box
    as='nav'
    gridArea="header"
    direction="row"
    align="center"
    justify="between"
    pad={{ horizontal: "medium", vertical: "small" }}
    background="white"
    animation='slideDown'
    {...rest}
  >
    {children}
  </Box>
);