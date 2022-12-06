import React from 'react';
import Wrapper from '../assets/wrappers/TableChartPage';

import { useEffect, useState } from 'react';

function TableChart() {
  const [gpsData, setGpsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((result) => setGpsData(result))

      .catch((error) => console.log(error));
  }, []);

  return (
    <Wrapper>
      <div>
        <table className='main-table'>
          <tr>
            <th>TimeStamp</th>
            <th>Location</th>
          </tr>
          {/* {gpsData && gpsData.length > 0
            ? gpsData.map((usr) => (
                <tr>
                  <td>{usr.TimeStamp}</td>
                  <td>{usr.Location}</td>
                </tr>
              ))
            : 'Loading'} */}
          <tr>
            <td>31-08-2022 10:05</td>
            <td>L1</td>
          </tr>
          <tr>
            <td>31-08-2022 10:10</td>
            <td>L1</td>
          </tr>
          <tr>
            <td>31-08-2022 10:15</td>
            <td>L1</td>
          </tr>
          <tr>
            <td>31-08-2022 10:20</td>
            <td>L1</td>
          </tr>
          <tr>
            <td>31-08-2022 10:25</td>
            <td>L2</td>
          </tr>
        </table>
      </div>
    </Wrapper>
  );
}

export default TableChart;
