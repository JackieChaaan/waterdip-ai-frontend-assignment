import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './TimeSeriesChart.scss'

const TimeSeriesChart = ({ dates, totalVisitors }) => {
    const options = {
        series: [{
            name: 'Total Number of Visitors',
            data: totalVisitors
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        title: {
            text: 'Number of Visitors per Day',
            align: 'left'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Total Visitors'
            },
        },
        xaxis: {
            type: 'datetime',
            categories: dates
        },
        tooltip: {
            shared: false,
        }
    };

    return (
        <div className="line-chart">
            <ReactApexChart options={options} series={options.series} type="area" height={350}/>
        </div>
    );
};

export default TimeSeriesChart;
