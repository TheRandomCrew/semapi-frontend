import React, { useState, useEffect } from 'react';
import { useNewFetch } from '../util/hooks';
import { Home as Homeview } from '../../view';
import exampleJSON from '../util/example';

function Home (){
    const [query, setQuery] = useState('pupusas');
    const [device, setDevice] = useState('PC');
    const [location, setLocation] = useState({name:'US'});
    const [{ data, loading }, startFetch] = useNewFetch();

    const setStart =() => {
        startFetch(`https://data.seosemapi.com:35566/search/single?keyword=${query}&email=anotherguy%40gmail.com&password=anotherguy&organic=true&location=${location.name}&language=English&mode=${device}&total_results=10&output_format=HTML%2BJSON`)
    }
    // React.useEffect(() => {
    //     startFetch(`https://data.seosemapi.com:35566/search/single?keyword=${query}&email=anotherguy%40gmail.com&password=anotherguy&organic=true&country_code=US&location=${location}&language=English&mode=${device}&total_results=10&output_format=HTML%2BJSON`)
    // }, [])

    return (
        <Homeview
            setStart={setStart}
            data={data?data[0]:exampleJSON}
            loading={loading}
            query={query}
            location={location}
            device={device}
            setQuery={setQuery}
            setLocation={setLocation}
            setDevice={setDevice}
        />
    )
};

export default Home;