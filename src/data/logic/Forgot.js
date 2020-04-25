import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { history } from '../../router/router'

/** Import logic functions */
import { useFetch } from "../util/hooks";
import tokenService from '../../router/token'
/** Import view components */
//import { LogIn as LoginView } from '../../view';
import { Forgot as ForgotView } from '../../view';
const Forgot = () => {
    /** Hooks States */
    const [localEmail, setEmail] = useState(undefined);
    const [error, setError] = useState('')

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com:35566/user/forgot_password?email=${encodeURIComponent(localEmail)}`);

    const onForgot = () => {
        /** Verifies the form fields and active the hook state "start" of useFetch*/
        
        if (localEmail===undefined || localEmail ===null || localEmail=== "") {
            console.log('ERROR')
            return setError("Email can't be empty" );
        }
        console.log(localEmail)
        
        setStart(true);
    };

    React.useLayoutEffect(() => {
        /** Check if the user has already logged or if there was an error */
        if (data.length > 0 || data[1] === 200) {
            setError( "Se envio un correo con su nuevo password" );
        } else {
            if (data.detail) {
                setError( data.detail.message );
            }
        };
        return () => {setStart(false)};
    }, [data, setStart, localEmail]);

    React.useEffect(() => {
        /** If the user is registered replace the browsing history to the user's dashborad */
        if (localStorage.hasOwnProperty('seosemapi')) {
            try {
                history.replace(`/dashboard/${encodeURIComponent(localEmail.split('@')[0])}`)
            } catch (e) {
                console.error(e)
            }
        }
    })
   
    return tokenService.get() ? (
        /** If the user is logged redirect to the user's dashboard */
        <Redirect to={`/dashboard/${encodeURIComponent(localEmail.split('@')[0])}`} />
    ) : (
        /** If the user is not logged show the Login Form */
            <ForgotView
                loading={loading}
                error={error}
                email={localEmail}
                onForgot={onForgot}
                setEmail={setEmail}
            />
        )
}

export default Forgot