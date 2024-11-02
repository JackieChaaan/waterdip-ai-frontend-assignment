import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import './SparklineChart.scss'

const SparklineChart = ({ adultVisitors, childrenVisitors }) => {
    const [totalAdults, setTotalAdults] = useState(0);
    const [totalChildren, setTotalChildren] = useState(0);

    useEffect(() => {
        // Calculate totals
        setTotalAdults(adultVisitors.reduce((acc, curr) => acc + curr, 0));
        setTotalChildren(childrenVisitors.reduce((acc, curr) => acc + curr, 0));

        const adultOptions = {
            series: [{
                data: adultVisitors
            }],
            chart: {
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'smooth'
            },
            fill: {
                opacity: 0.3,
            },
            yaxis: {
                min: 0
            },
            colors: ['#982B1C'],
        };

        const childrenOptions = {
            series: [{
                data: childrenVisitors
            }],
            chart: {
                type: 'area',
                height: 160,
                sparkline: {
                    enabled: true
                },
            },
            stroke: {
                curve: 'smooth'
            },
            fill: {
                opacity: 0.3,
            },
            yaxis: {
                min: 0
            },
            colors: ['#FF9F00'],
        };

        // Render adult chart
        const adultChart = new ApexCharts(document.querySelector("#chart-adult"), adultOptions);
        adultChart.render();

        // Render children chart
        const childrenChart = new ApexCharts(document.querySelector("#chart-children"), childrenOptions);
        childrenChart.render();

        // Cleanup charts on component unmount
        return () => {
            adultChart.destroy();
            childrenChart.destroy();
        };
    }, [adultVisitors, childrenVisitors]);

    return (
        <div className='sparkline-chart'>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='sparkline-chart-adult'>
                        <h4>Total Adult Visitors: {totalAdults}</h4>
                        <div id="chart-adult"></div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <div className='sparkline-chart-children'>
                        <h4>Total Children Visitors: {totalChildren}</h4>
                        <div id="chart-children"></div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SparklineChart;
