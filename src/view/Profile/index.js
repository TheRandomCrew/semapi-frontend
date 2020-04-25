import React, {useState} from 'react';

import { Box, Heading, Form, FormField, TextInput, Button } from 'grommet'
import { UserSettings } from 'grommet-icons'

const Profile = ({error, setStart}) => {

    const [password, setPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [username, setUsername] = useState('');

    const Submit = () => {
        console.log(username, password)
        setStart(username, password)
    };

    console.log(error)
    return (
        <Box align="center" justify="center" pad="small" fill="vertical" background={{ "color": "light-2" }}>
            <Box align="center" justify="center" pad={{ "horizontal": "xlarge", "vertical": "large" }} background={{ "color": "light-3", "opacity": "strong" }} round="medium" gap="medium">
                <Heading margin="none">
                    Tu perfil
          </Heading>
                <UserSettings size="large" color="brand" />
                <Form onSubmit={()=>Submit()}>
                    <FormField label="Tu nombre" name="username">
                        <TextInput 
                        type="text" 
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />
                    </FormField>
                    <FormField label="Tu contraseña anterior" name="old_password">
                        <TextInput 
                        type="password" 
                        value={oldPassword}
                        placeholder="La que usabas anteriormente" 
                        onChange={(e)=>setOldPassword(e.target.value)}
                        />
                    </FormField>
                    <FormField label="Tu nueva contraseña" name="password">
                        <TextInput 
                        type="password" 
                        value={password}
                        placeholder="La que usabas anteriormente"
                        onChange={(e)=>setPassword(e.target.value)} 
                        />
                    </FormField>
                    <Button 
                    label="Cambiar" 
                    primary={true} 
                    type="submit" 
                    hoverIndicator={true} 
                    fill="horizontal" 
                    color="status-critical" 
                    />
                </Form>
            </Box>
        </Box>
    )
};

export default Profile;