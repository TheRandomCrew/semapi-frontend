import React from 'react'
import { Box, DataTable, Button } from 'grommet'
import { Search, Grommet } from 'grommet-icons';
import SearchWrapper from './SearchesWrapper';

const Searchs = ({
    error, email,
    from, to,
    tableData,
    loading,
    onSearch,
    setFrom,
    setTo
}) => {

    const step = 10;

    return (
        <SearchWrapper
            ErrorMsg={error.server && <p style={{ color: 'red' }}>{error.server}</p>}
            from={from}
            to={to}
            email={email}
            setTo={setTo}
            setFrom={setFrom}
            chartsData={tableData}
            loading={loading}
            SearchButton={<Button
                style={{ borderRadius: '0' }}
                label={loading ? 'Buscando' : 'Buscar'}
                color="status-ok"
                primary={true}
                reverse={loading}
                hoverIndicator={{ background: 'status-ok', textColor: 'white' }}
                icon={loading ? <Box animation={{
                    "type": "pulse",
                    "delay": 100,
                    "duration": 100,
                    "size": "large"
                }} ><Grommet color='brand' /></Box> : <Search color='white' />}
                onClick={() => onSearch()}
            />}
        >
            <DataTable
                // resizeable={true}
                step={step}
                columns={[
                    {
                        "header": "Fecha de Consulta",
                        "property": "consultation_date",
                        "primary": true, "sortable": true,
                        render: datum => <h4>{datum.consultation_date}</h4>
                    },
                    {
                        "header": "Tipo de Busqueda", 
                        "property": "query_type", 
                        render: datum => <span>{datum.query_type}</span>
                    },
                    {
                        "header": "Palabra Clave", 
                        "property": "keyword", 
                        "search": true, 
                        render: datum => <h4>{datum.keyword}</h4>
                    },
                    {
                        "property": "query_id", 
                        "header": "query_id", 
                        render: datum => <code>{datum.query_id}</code>
                    },
                    {
                        "header": "Dominio de Busqueda", 
                        property: "search_domain", 
                        render: datum => <span>{datum.search_domain}</span>
                    },
                    {
                        "header": "Pais", 
                        "property": "country_code", 
                        render: datum => <span>{datum.country_code}</span>
                    },
                    {
                        "header": "URL", 
                        "property": "result_url", 
                        render: datum => <a href={datum.result_url} target="_blank" rel="noopener noreferrer">link</a>
                    }
                ]}
                data={tableData}
                onMore={() => console.log(`InfiniteScroll fires onMore after loading ${10} items`)}
            />
        </SearchWrapper>
    )
}

export default Searchs;