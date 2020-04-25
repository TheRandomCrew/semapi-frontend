import React, { useState } from 'react';

import { history } from '../../router/router'

/** Import logic components */
import { useFetch } from "../util/hooks";

/** Import view components */
import { SignUp as SignUpView } from '../../view';

const SignUp = ({fromPlan, done}) => {
    /** Hooks States */
    const [email, setEmail] = useState('');
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [layer, setLayer] = useState(false);
    const [error, setError] = useState('')

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com:35566/user/create?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&secret_key=${encodeURIComponent("OHLuUV~L0jci+=_qw`d=|b?lc`p?'b")}`);

    const onLogIn = () => {
        if (password !== passwordConfirm) { return setError('Passwords are not the same') }
        
        setStart(true)
    }

    React.useLayoutEffect(() => {
        if (data.length > 0 && data[1]===400){
            setError(data[0].message)
        }
        if (data.length > 0 && data[1] === 200) {
            setStart(false);
            setLayer(true);
            console.log(data[0])
            done(true)
        } else {
            if (data.detail) {
                setError(data.detail.message);
            }
        }
        return () => {
            setStart(false);
        };
    }, [data, setStart]);

    React.useEffect(() => {
        if (data.length > 0 && data[1] === 200) {
            alert('Welcome to SEOSemApi! Check your email for confirmation!')
            if (!fromPlan) history.replace(`/entra`)
        }
    }, [data]);

    return (
        <SignUpView
            email={email}
            username={username}
            password={password}
            passwordConfirm={passwordConfirm}
            data={data}
            loading={loading}
            layer={layer}
            error={error}
            setEmail={setEmail}
            setUser={setUser}
            setPassword={setPassword}
            setPasswordConfirm={setPasswordConfirm}
            onLogIn={onLogIn}
            setLayer={setLayer}
        />
    )
}

export default SignUp