import React from 'react';
import { Redirect } from 'react-router-dom'
import tokenService from '../../router/token'
import { Dashboard as DahsboardView } from '../../view';

const Dashboard = ({ match }) => {
    const { email, apikey, plan } = tokenService.get().token || '';
    /** If exist token show dashboar else redirect to signup */
    if (tokenService.get()) {
        return (
            (
                <DahsboardView
                    email={email}
                    path={match.url}
                    apikey={apikey}
                    plan={plan}
                />
            )
        )
    } else return (
        <Redirect to="/entra" />
    )
}

export default Dashboard