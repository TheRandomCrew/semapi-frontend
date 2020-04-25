import React from 'react';
import { UtilizationCard } from '../Dashboard/UtilizationCard'
import OverviewWrapper from './OverviewWrapper';
import getDatesArray from './getDatesArray';
import TimelySearches from './TimelySearches';

const Overview = ({
    email, loading, tableData=[{date: new Date(), searches: 0}], plan
}) => {
    const [chartData, setChartData] = React.useState([{key: new Date(), id: 1, data: 0}])

    React.useLayoutEffect(() => {
        if (tableData.length > 0) {
            const final = getDatesArray(tableData)
            setChartData(final)
        }
    }, [tableData])

    console.log(plan)

    return (
        <OverviewWrapper
            PlanUse={<UtilizationCard data={{ name: 'Plan Developer', value: 250000, used: true, usedValue: 23123, available: true, availableValue: 250000 - 23123, percent: (23123 / 250000) * 100 }} />}
            email={email}
            CheckMonthly={<TimelySearches email={email} isMonthly plan={plan}/>}
            CheckDayly={<TimelySearches email={email} />}
            chartsData={chartData}
            loading={loading}
            plan={plan}
        />
    )
}
export default Overview;