import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './ColumnChart.scss'

const ColumnChart = ({ countryData }) => {
    const options = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '55%',
            },
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Number of Visitors per Country',
            align: 'left'
        },
        xaxis: {
            categories: Object.keys(countryData) // Countries as x-axis categories
        },
        yaxis: {
            title: {
                text: 'Total Visitors'
            }
        },
        tooltip: {
            shared: true,
            intersect: false
        }
    };

    const series = [{
        name: 'Total Visitors',
        data: Object.values(countryData) // Total visitors for each country
    }];

    return (
        <div className="column-charts">
            <ReactApexChart options={options} series={series} type="bar" height={350}/>
        </div>
    );
};

export default ColumnChart;
