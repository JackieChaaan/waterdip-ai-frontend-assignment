import React, { useState, useEffect } from 'react';
import DateSelector from '../date_selector/DateSelector';
import TimeSeriesChart from '../charts/TimeSeriesChart';
import ColumnChart from '../charts/ColumnChart';
import SparklineChart from '../charts/SparklineChart'; // Import the SparklineChart component
import './ChartContainer.scss'

const ChartContainer = ({ data }) => {
    const initialStartDate = new Date('2015-07-01');
    const initialEndDate = new Date('2015-08-31');

    const [dateRange, setDateRange] = useState([initialStartDate, initialEndDate]);
    const [filteredData, setFilteredData] = useState([]);

    const handleDateChange = ([start, end]) => {
        if (start && end) {
            const earliestDate = new Date('2015-06-30');
            const latestDate = new Date('2015-09-01');

            const validStart = start < earliestDate ? earliestDate : start;
            const validEnd = end > latestDate ? latestDate : end;

            setDateRange([validStart, validEnd]);

            const filtered = data.filter((item) => {
                const date = new Date(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`);
                return date >= validStart && date <= validEnd;
            });
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    };

    useEffect(() => {
        const filtered = data.filter((item) => {
            const date = new Date(`${item.arrival_date_year}-${item.arrival_date_month}-${item.arrival_date_day_of_month}`);
            return date >= initialStartDate && date <= initialEndDate;
        });
        setFilteredData(filtered);
    }, [data]);

    
    const aggregatedData = filteredData.reduce((acc, item) => {
        const date = `${item.arrival_date_year}-${String(item.arrival_date_month).padStart(2, '0')}-${String(item.arrival_date_day_of_month).padStart(2, '0')}`;
        const totalForDate = (Number(item.babies) || 0) + (Number(item.children) || 0) + (Number(item.adults) || 0);

        if (!acc[date]) {
            acc[date] = { total: 0, adults: 0, children: 0 };
        }

        acc[date].total += totalForDate;
        acc[date].adults += (Number(item.adults) || 0);
        acc[date].children += (Number(item.children) || 0);
        return acc;
    }, {});

    const dates = Object.keys(aggregatedData);
    const totalVisitors = Object.values(aggregatedData).map(item => item.total);
    const adultVisitors = Object.values(aggregatedData).map(item => item.adults);
    const childrenVisitors = Object.values(aggregatedData).map(item => item.children);

    const countryData = filteredData.reduce((acc, item) => {
        const country = item.country;
        const visitors = (Number(item.babies) || 0) + (Number(item.children) || 0) + (Number(item.adults) || 0);
        acc[country] = (acc[country] || 0) + visitors;
        return acc;
    }, {});

    return (
        <div className='chart-container'>
            <div className="date-selector">
                <DateSelector onDateChange={handleDateChange} />
            </div>
            <div className="charts">
                <div className="sparkline-chart">
                    <div className="row"></div>
                    <SparklineChart adultVisitors={adultVisitors} childrenVisitors={childrenVisitors} />
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5">
                        <div className="timeseries-chart">
                            <TimeSeriesChart dates={dates} totalVisitors={totalVisitors} />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7">
                        <div className="column-chart">
                            <ColumnChart countryData={countryData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartContainer;
