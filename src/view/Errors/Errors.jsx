import React from 'react'
import { Box, DataTable, Button } from 'grommet'
import { Search, Grommet } from 'grommet-icons';
import ErrorsWrapper from './ErrorsWrapper';

const Errors = ({
    error, email,
    from, to,
    tableData,
    loading,
    onSearch,
    setFrom,
    setTo
}) => {
    return (
        <ErrorsWrapper
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
                resizeable={true}
                step={10}
                columns={[
                    { 
                        "header": "Fecha de Consulta",
                         "property": "error_time",
                          "primary": true, "sortable": true,
                          render: datum => <h4>{datum.error_time}</h4>
                     }, 
                    { 
                        "header": "Tipo de Error", 
                        "property": "error_description",
                        render: datum => <span>{datum.error_description}</span>
                    }
                ]}
                data={tableData}
                onMore={() => console.log(`InfiniteScroll fires onMore after loading ${10} items`)}
            />
        </ErrorsWrapper>
    )
}

export default Errors;