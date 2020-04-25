import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      async function fetchUrl() {
        const response = await fetch(url, { headers: { 'Access-Control-Allow-Origin': true } });
        const json = await response.json();
        setData(json);
        setStart(false);
        setLoading(false);
      }
      setLoading(true);
      fetchUrl();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  return [data, { loading, setStart }];
}

const initialState = {
  data: [],
  url: '',
  loading: false,
  start: false
};

const useNewFetch = () => {
  const [{ data, loading, start, url }, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    if (start) {
      startFetch(url);
    }
  }, [start, url]);

  const setStart = (url) => {
    dispatch({ type: 'START_FETCH', url })
  }

  const startFetch = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    dispatch({ type: 'END_FETCH', data: json })
  }

  return [
    {
      data,
      loading
    },
    setStart
  ];
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_FETCH': {
      return {
        ...state,
        url: action.url,
        start: true,
        loading: true
      };
    }
    case 'END_FETCH': {
      return {
        data: action.data,
        start: false,
        loading: false
      }
    }
    default: throw new Error('Unexpected action. Use START_FETCH | END_FETCH instead.');
  }
};

export { useFetch, useNewFetch };


// EXAMPLE OF USE:
//
// const [{ data, loading }, startFetch] = useNewFetch()
//
// React.useEffect(() => {
//     if (email) {
//         startFetch('http://localhost:8001/users/${email})
//     }
// }, [email])
//
// console.log(loading, ': ', data)