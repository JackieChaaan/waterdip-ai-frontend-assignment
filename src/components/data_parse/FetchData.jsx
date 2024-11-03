import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'

const FetchData = ({setData}) => {

  const [cleanData, setCleanData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await axios.get('/waterdip-ai-frontend-assignment/data/hotel_bookings_1000.csv', {
          responseType: 'text', // This tells axios to treat the response as plain text
        });
        console.log(response.data);
        console.log('test');

        Papa.parse(response.data, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const cleanedData = results.data.map((row) =>
              Object.fromEntries(
                Object.entries(row).filter(([key, value]) => key && value)
              )
            );
            setCleanData(cleanedData);
            setData(cleanedData)
            console.log(cleanedData);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV file:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      

      {/* Display CSV data in a table
      {cleanData.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(cleanData[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cleanData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )} */}
    </div>
  )

}

export default FetchData
