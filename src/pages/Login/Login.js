import React from 'react'
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import { history } from '../Routes'
import LoginForm from './container/LoginForm';
import globalContext from '../../store/globalContext'

const Login = () => {
    const [apiKey, setApiKey] = React.useState(null)
    const { actions: { setUserID } } = React.useContext(globalContext);

    const login = (email, password) => {
        axios({
            url: 'https://data.seosemapi.com/auth/login',
            method: 'post',
            data: { email, password },
            crossdomain: true
        })
            .then(res => {
                if (res[1] === 200) {
                    const { api_key, username } = res[0];
                    setUserID(username)
                    setApiKey(api_key)
                    history.replace(`/${username}`)
                } else {
                    console.log(res)
                    const error = new Error(res.errors);
                    throw error;
                }
            })
            .catch(e => { console.error(e) })
    }

    const onSubmit = (email, password) => {
        login(email, password)
    };


    return apiKey ? (
        <Redirect to="/" />
    ) : (
            <React.Fragment>
                <LoginForm onSubmit={onSubmit} />
                <Link to='/inscribete'>Inscibete</Link>
            </React.Fragment>
        )
}

export default Login;
