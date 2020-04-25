import React, { useState } from 'react';
import {default as ProfileView} from '../../view/Profile';
import { useNewFetch } from '../util/hooks';

const Profile = ({email}) => {
    const [error, setError] = useState('');
    const [{ data, loading }, startFetch] = useNewFetch();

    React.useEffect(() => {
        if (data.lenght>0) {
            console.log(data)
        }
    }, [data])
    
    const setStart = (username, password) => {
        console.log(username, password)
        startFetch(`https://data.seosemapi.com:35566/user/update?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&secret_key=OHLuUV~L0jci%2B%3D_qw%60d%3D%7Cb%3Flc%60p%3F%27b`)
    };

    console.log(loading, ': ', data );
    return (
        <ProfileView error={error} setStart={setStart} loading />
    )
};

export default Profile;