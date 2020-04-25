import React, { useState } from 'react';
import SignUp from '../../data/logic/SignUp';
import Subscribe from '../Store/subscribe';

import tokenService from '../../router/token'

const Plan = ({ match }) => {
    const [state, setState] = useState(false);
    console.log(state);
    // agency: 'plan_FQw4BI1GMQ9F9r' , developer: 'plan_FQvzylvA7hQAWw', basic: 'plan_FQvxAlLgKVqTEJ'


    const { email } = tokenService.get().token || '';

    console.log(email)
    if (state || email) {
        if (match.params.plan === 'agency') {
            return <Subscribe
                item={plans[0]}
            />
        }
        if (match.params.plan === 'developer') {
            return <Subscribe
                item={plans[1]}
            />
        } else {
            return <Subscribe
                item={plans[2]}
            />
        }
    }
    return (
        <SignUp
            fromPlan={true}
            done={setState}
        />
    )
};

export default Plan;

const plans = [
    {
        "id": "plan_FQw4BI1GMQ9F9r",
        "name": "SEO SEM API AGENCY",
        "created": "Sun Jul 14 2019 09:41:18",
        "interval": "month",
        "amount": 24000,
        "currency": "usd"
    },
    {
        "id": "plan_FQvzylvA7hQAWw",
        "name": "SEO SEM API DEVELOPER",
        "created": "Sun Jul 14 2019 09:36:05",
        "interval": "month",
        "amount": 13000,
        "currency": "usd"
    },
    {
        "id": "plan_FQvxAlLgKVqTEJ",
        "name": "SEO SEM API BASIC",
        "created": "Sun Jul 14 2019 09:34:02",
        "interval": "month",
        "amount": 5000,
        "currency": "usd"
    }
]