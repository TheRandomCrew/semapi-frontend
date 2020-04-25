import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Form, Heading, Text } from 'grommet';

const ForgotWrapper = ({ ErrorMsg, InputEmail, ConfirmButton }) => {

  return (
    <Box
      align="center"
      justify="center"
      pad="small"
      alignSelf="stretch"
      basis="full"
      fill="vertical"
      background={{ "color": "accent-1", "opacity": "medium", "position": "center" }}
    >
      <Grid align="center" alignContent="center" justify="center">
        <Box
          align="center"
          justify="center"
          pad="small"
          animation={{ "type": "pulse", "size": "small" }}
        >
          <Heading color="accent-2" textAlign="center">
            Recupera tu Contraseña
          </Heading>
          <Text color="black">
            Ingresa tu email y te ayudaremos a recuperar tu Contraseña.
          </Text>
        </Box>
          {ErrorMsg}
        <Box
          align="center"
          justify="center"
          pad="small"
          basis='1/2'
          width='medium'
        >
          <Form>
            <Box
              align="center"
              justify="center"
              pad="small"
              round="xsmall"
              animation="slideDown"
              background={{ "color": "dark-1", "dark": true, "position": "center" }}
              elevation="small"
            >
              <Grid alignContent="start">
                {InputEmail}
              </Grid>
              <Box align="center" justify="center" pad="small">
                <Text color='grey'>
                  Regresar atras
                </Text>
                <Link to="/entra"  style={{color:'white'}}>Entrar</Link>
                <Box
                  align="center"
                  justify="between"
                  pad={{ "top": "medium" }}
                  direction="row"
                  wrap={true}
                  alignSelf="stretch"
                  gap="medium"
                >
                  {ConfirmButton}
                </Box>
              </Box>
            </Box>
          </Form>
        </Box>
      </Grid>
    </Box>
  )
}
export default ForgotWrapper;