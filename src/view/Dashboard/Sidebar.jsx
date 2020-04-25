import React from 'react';
import { Link } from "react-router-dom";

import { Box, Button } from "grommet";
import {links} from '../../router/router';
import DASHBOARD from '../Assets/dashboard/dashboard.png';
import SEARCHES from '../Assets/dashboard/searches.png';
import ERRORS from '../Assets/dashboard/errors.png';

const icons = {
  '/inicio': <img src={DASHBOARD} alt='home' height='33px'/>,
  '/busquedas': <img src={SEARCHES} alt='searches' height='33px'/>,
  '/errores': <img src={ERRORS} alt='errors' height='33px'/>
}
function Sidebar({ sidebar, path }) {
  return sidebar && (
    <Aside>
      {links.map((name, id) => (
        <Link to={`${path}${name.path}`} key={name.label + id}>
          
          <Button 
          fill 
          hoverIndicator 
          label={<Box 
            align="center"
            >
              {icons[name.path]}
              {name.label}
          </Box>
              } 
          primary 
          color='rgb(22, 11, 82)' 
          style={{ borderRadius: '0px', color: 'white' }} 
          />
        </Link>
      ))}
    </Aside>
  )
}

export default Sidebar;

const Aside = ({ children = undefined, ...rest }) => (
  <Box
    as='aside'
    gridArea="sidebar"
    background='rgb(22, 11, 82)'
    width="xsmall"
    animation={[
      { type: "fadeIn", duration: 300 },
      { type: "slideRight", size: "xlarge", duration: 150 }
    ]}
    style={{
      padding:'5px',
      marging:'5px'
    }}
    {...rest}
  >
    {children}
  </Box>
);