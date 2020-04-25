import React, {useState} from 'react';
import { useFetch } from "../util/hooks";

import Searchs from '../../view/Searchs/Searchs';

var byMonth = new Date(); // last month date
const pastMonth = byMonth.getMonth() - 1;
byMonth.setMonth(pastMonth);


var tomorrow = new Date();
const modifier = tomorrow.getDate();
tomorrow.setDate(modifier);

const Search = ({email, apikey}) => {
    const [from,setFrom] = useState(byMonth.toLocaleDateString());
    const [to, setTo] = useState(tomorrow.toLocaleDateString());
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState({})

    const [data, { loading, setStart }] = useFetch(`https://data.seosemapi.com:35566/query_search/query_search?start_date=${encodeURIComponent(from)}&end_date=${encodeURIComponent(to)}&target_email=${encodeURIComponent(email)}&api_key=${encodeURIComponent(apikey)}`);

    const onSearch = () => {
        setStart(true);
    }
    React.useLayoutEffect(() => {
        try {
            if (data.length > 0 || data[1] === 200) {
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

    React.useEffect(() => {
        setStart(true)
      return () => {
        setStart(false)
      }
    },[email]);

    return (
        <Searchs
            error={error}
            from={from}
            to={to}
            email={email}
            tableData={tableData}
            loading={loading}
            onSearch={onSearch}
            setFrom={setFrom}
            setTo={setTo}
        />
    )
}

export default Search