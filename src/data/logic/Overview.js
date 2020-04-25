import React from 'react';
import { useFetch } from "../util/hooks";
import { Overview as OverviewView } from '../../view'

var ourDate = new Date();
const pastMonth = ourDate.getMonth() - 1;
ourDate.setMonth(pastMonth);

var tomorrow = new Date();
const modifier = tomorrow.getDate();
tomorrow.setDate(modifier);

/** Hook Component */
const Overview = ({ email, apikey, plan }) => {
    /** Hook State */
    const [tableData, setTableData] = React.useState([{date: new Date().toLocaleDateString(), searches: 0}])
    
    const [ data, { loading, setStart }] = useFetch(`https://data.seosemapi.com:35566/query_search/statistics?start_date=${encodeURIComponent(ourDate)}&end_date=${encodeURIComponent(tomorrow)}&target_email=${encodeURIComponent(email)}&api_key=${encodeURIComponent(apikey)}`);

    React.useLayoutEffect(() => {
        /** If the fetch is correct then loaded the info in the hook state */
        if (data.length > 0 || data[1] === 200) {
            setStart(false);
            if (data[0].result) {
                const { result } = data[0];
                if (typeof (result) === "object") {
                    console.log(result)
                    setTableData(result);
                }
            }
        }
        return () => {
            setStart(false);
        };
    }, [data, setStart]);

    /** If hook state email change init fetch */
    React.useEffect(() => {
        setStart(true)
        return () => {
            setStart(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email])
    
    return (
        <OverviewView
            email={email}
            tableData={tableData}
            loading={loading}
            plan={plan}
        />
    )
}

export default Overview;