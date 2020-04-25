import React from 'react'
import { Box, Heading, Grid, Text } from 'grommet'
import DatePicker from './DatePicker';
import Chart from './Chart';

const ErrorsWrapper = ({
    setFrom, setTo, from, to, email,
    SearchButton,
    children = undefined
}) => {

    return (
        <Box align="center" justify="start" pad="small" animation="zoomIn" fill="horizontal" gap="xsmall" >
                <Chart email={email} from={from} to={to} />
            <Box align="center" justify="start" pad="xsmall" animation="zoomIn" fill='horizontal' gap="xsmall">
                <Heading textAlign="start" level="3" color="brand">
                    BÚSQUEDAS
                </Heading>
                <Grid columns={["small", "auto", "small"]}>
                    <DatePicker
                        name={'Desde'}
                        value={from}
                        onChange={({ value }) => setFrom(value)}
                    />
                    <Text> hasta </Text>
                    <DatePicker
                        name={'Hasta'}
                        value={to}
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

export default ErrorsWrapper;