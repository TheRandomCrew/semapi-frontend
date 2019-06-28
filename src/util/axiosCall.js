import {useState, useEffect} from 'react';
import axios from 'axios';

// based on https://www.robinwieruch.de/react-hooks-fetch-data/

const useAxios = (url) => {
  const [data, setData] = useState({});
  const [config, setConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if(config){

      const fetchData = async () => {
        setIsLoading(true);
        try {
          const result = await axios(url, config);
          console.log(result)
          
          setData(result.data);
        } catch (error) {
          console.error(error.response.data.errors)
          setErrors(error.response.data.errors);
        }
        
        setIsLoading(false);
      };
      
      fetchData();
    }
  }, [url,config]);

  return [{ data, isLoading, errors }, setConfig];
};

export default useAxios;