import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.scss'

const DateSelector = ({ onDateChange }) => {
    const initialStartDate = new Date('2015-07-01');
    const initialEndDate = new Date('2015-08-31');

    const [startDate, setStartDate] = useState(initialStartDate);
    const [endDate, setEndDate] = useState(initialEndDate);

    const handleChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onDateChange([start, end]);
    };

    return (
        <div className='date-picker'>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                isClearable
                placeholderText="Select date-range"
                minDate={initialStartDate}
                maxDate={initialEndDate}
            />
        </div>
    );
};

export default DateSelector;
