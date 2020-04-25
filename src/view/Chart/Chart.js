import React from 'react';
import {Line} from 'react-chartjs-2';

const Chart = ({data= [{key: 0, data :0}]}) => (
    <Line data={ {
        labels: data.map(d => d.key),
        datasets: [
          {
            label: 'Searches by day',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: 'rgba(75,192,192,1)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'blue',
            pointHoverBorderColor: 'blue',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.map(d => d.data)
          }
        ]
      }}
      options={{
        maintainAspectRatio: true,
        scales: {
            xAxes: [
              {
                type: 'time',
                time: {
                  unit: 'day'
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  min: 0
                }
              }
            ]
          }
      }}
      />
);

export default Chart;