import React, { useState } from 'react';

import Location from "./components/Location";

const TypeAhead = () => {
    const [keyword, setKeyword] = useState('keyword');

    return (
        <Location
        value={keyword}
        onChange={setKeyword}
        placeholder="Location"
        />
    )
};

export default TypeAhead;