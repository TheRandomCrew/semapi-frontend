import React, {useState} from 'react';
import { useFetch } from "../util/hooks";

import {Errors as ErrorsWrapper} from '../../view';

var byMonth = new Date(); // last month date
const pastMonth = byMonth.getMonth() - 1;
byMonth.setMonth(pastMonth);


var tomorrow = new Date();
const modifier = tomorrow.getDate();
tomorrow.setDate(modifier);

const Errors = ({email, apikey}) => {
    const [from,setFrom] = useState(byMonth.toLocaleDateString());
    const [to, setTo] = useState(tomorrow.toLocaleDateString());
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState({})

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com:35566/error_search/error_search?start_date=${encodeURIComponent(from)}&end_date=${encodeURIComponent(to)}&target_email=${encodeURIComponent(email)}&api_key=${encodeURIComponent(apikey)}`);

    React.useLayoutEffect(() => {
        /** If the fetch is correct then loaded the info in the hook state */
        try {
            if (data.length > 0 || data[1] === 200) {
                setStart(false);
                if(data[0].result){
                    const {result} = data[0];
                    if(typeof(result)==="object"){
                        setTableData(result);
                    }
                    else{console.error(result)}
                }
            } else {
                if (data.detail) {
                    setError({ server: data.detail.message });
                }
            }
        } catch (error) {
            console.log(error)
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
    }, [email]);

    return (
        <ErrorsWrapper
            error={error}
            from={from}
            to={to}
            email={email}
            tableData={tableData}
            loading={loading}
            setFrom={setFrom}
            setTo={setTo}
        />
    )
}

export default Errors