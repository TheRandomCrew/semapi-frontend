import React from 'react';

// import { LineChart, LineSeries, PointSeries } from 'reaviz';
import { Box, Text, Heading } from "grommet";

import tokenService from '../../router/token';
import Chart from '../Chart/Chart'

const OverviewWrapper = ({ CheckMonthly, CheckDayly, email, PlanUse, chartsData, loading }) => {

    const { apikey } = tokenService.get().token || 'dad92e94-4728-47aa-8489-7006974d8411';
    return (
        <Box align="start" justify="start" pad="small" animation="zoomIn" fill="horizontal" gap="xsmall">
            <Heading level="4" color='slategrey'>
                Credentials y Consumption
            </Heading>
            <Text color='slategray'>
                <b>API Login email:</b> {email}
            </Text>
            <Text color='slategray'>
                <b>API key:</b> {apikey}
            </Text>
            <Text>
                {CheckMonthly}
            </Text>
            <Text>
                {CheckDayly}
            </Text>

            <Box align="center" justify="center" pad="small" fill="horizontal" background={{ "color": "light-1" }} round="xsmall" elevation="xsmall" >
                <Box align="start" justify="start" pad="small" fill="horizontal" direction="row-responsive" border={{ "side": "all" }}>
                </Box>

                {loading && 'Loading...'}

                <Chart data={chartsData} />
                {/* <LineChart
                    height={250}
                    data={chartsData}
                    series={<LineSeries interpolation={'smooth'} colorScheme={['#418AD7']} symbols={<PointSeries show={true} />} />}
                /> */}
            </Box>
        </Box>
    )
}

export default OverviewWrapper;