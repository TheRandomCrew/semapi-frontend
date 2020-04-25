import React, { useState } from 'react';
import { useFetch } from "../util/hooks";

var ourDate = new Date();
const pastMonth = ourDate.getMonth() - 1;
ourDate.setDate(pastMonth);

var tomorrow = new Date();
const modifier = tomorrow.getDate();
tomorrow.setDate(modifier);

const useTimelySearches = () => {
    const [startDate, setStartDate] = useState(ourDate.toLocaleDateString());
    const [endDate, setEndDate] = useState(tomorrow.toLocaleDateString());
    const [targetEmail, setTargetEmail] = useState('');
    const [total, setTotal] = useState(null);
    const [error, setError] = useState('')
    const [
        data, { loading, setStart }
    ] = useFetch(`https://data.seosemapi.com:35566/query_search/query_search?start_date=${encodeURIComponent(startDate)}&end_date=${encodeURIComponent(endDate)}&target_email=${encodeURIComponent(targetEmail)}&target_username=israellaguan&api_key=${encodeURIComponent('dad92e94-4728-47aa-8489-7006974d8411')}`);

    const onSearch = () => {
        setStart(true)
    }

    React.useLayoutEffect(() => {
        if (data.length > 0 || data[1] === 200) {
            setStart(false);
            if(data[0].total){
                const {total} = data[0];
                setTotal(total)
            } else{
                const {result} = data[0];
                console.log(data[0]);
                setError(result)
            }
        }
        return () => {
            setStart(false);
        };
    }, [data, setStart]);

    return [{total, loading, error},{setStartDate, setEndDate, setTargetEmail, onSearch}]
}

export default useTimelySearches;