import React from 'react';

import {default as ChartView} from '../Chart/Chart';

import getDatesArray from './getDatesArray';
import { useFetch } from '../../data/util/hooks';

const Chart = ({ email, from, to }) => {
    const [tableData, setTableData] = React.useState([{key: new Date().toLocaleDateString(), id: 1, data: 0}]);

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com:35566/error_search/error_search?start_date=${encodeURIComponent(from)}&end_date=${encodeURIComponent(to)}&target_email=${encodeURIComponent(email)}&api_key=${encodeURIComponent('dad92e94-4728-47aa-8489-7006974d8411')}`);

    React.useLayoutEffect(() => {
        /** If the fetch is correct then loaded the info in the hook state */
        if (data.length > 0 || data[1] === 200) {
            setStart(false);
            if (data[0].result) {
                const { result } = data[0];
                if (typeof (result) === "object") {
                    const final = getDatesArray(result);
                    setTableData(final);
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
    }, [email]);

    return (
        <>
         {loading && 'Loading...'}
                <ChartView
                    data={tableData}
                />       
        </>
    )
};

export default Chart;