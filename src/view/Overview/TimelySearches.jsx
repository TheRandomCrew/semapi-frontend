import React from 'react';
import { Box, Grid, Text } from "grommet";
import { useTimelySearches } from "../../data";

var byMonth = new Date(); // last month date
const pastMonth = byMonth.getMonth() - 1;
byMonth.setMonth(pastMonth);

var byDay = new Date(); // yesterday date
const yesterday = byDay.getDate() - 1;
byDay.setDate(yesterday);

var tomorrow = new Date();
const modifier = tomorrow.getDate() + 1;
tomorrow.setDate(modifier);

const TimelySearches = ({ isMonthly, email, plan }) => {
    const [{ total, loading, error }, { setStartDate, setEndDate, setTargetEmail, onSearch }] = useTimelySearches();

    React.useEffect(() => {
        if (isMonthly) {
            setStartDate(byMonth);
        } else {
            setStartDate(byDay);
        }
        if (email) {
            setTargetEmail(email);
            setEndDate(tomorrow);
            onSearch(true);
        }
    }, []);

    return (
        <>
            <Text color='slategray'>
                {isMonthly ? <>
                    <b>Plan Name:</b> {plan&&plan}(you have used {total} )
                    </> : null}
            </Text>
            <br />
            <Text color='slategray'>
                <b>Number of searches {isMonthly ? 'this month' : 'today'}:</b>{total}
            </Text>
            <Text>
                {error && error + ' found'}
                {loading ? 'Loading...' : null}

            </Text>
        </>
    )
}

export default TimelySearches