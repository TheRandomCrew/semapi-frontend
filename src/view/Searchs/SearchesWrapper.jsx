import React from 'react'
import { Box, Heading, Grid, Text } from 'grommet'
import DatePicker from './DatePicker';
import INFO from '../Assets/dashboard/info.png'

import Chart from './Chart';
const SearchWrapper = ({
    setFrom, setTo, from, to, email,
    SearchButton,
    children = undefined
}) => {

    return (
        <Box align="center" justify="start" pad="small" animation="zoomIn" fill="horizontal" gap="xsmall" >
            <Box  justify="start" pad="xsmall" animation="zoomIn" fill='horizontal' gap="xsmall">
                <Heading textAlign="start" level="4" color="slategrey">
                    Searches
                </Heading>
                <Text level="6" color='slategray'>
                <img src={INFO} alt="info" srcset="" height='20px'/>    Searches are the use of the
                API you have made. Every keyword that is made in the search is
                counted
                </Text>
                <Chart email={email} from={from} to={to} />
                <Grid columns={["small", "auto", "small"]}>
                    <DatePicker
                        name={'Desde'}
                        value={from}
                        style={{ zIndex: '9999' }}
                        onChange={({ value }) => setFrom(value)}
                    />
                    <Text> hasta </Text>
                    <DatePicker
                        name={'Hasta'}
                        value={to}
                        style={{ zIndex: 10 }}
                        onChange={({ value }) => setTo(value)}
                    />
                    <Box align="center" justify="center" pad="small" >.</Box>
                </Grid>
                {SearchButton}
                {children}
            </Box>
        </Box>
    )
}

export default SearchWrapper;