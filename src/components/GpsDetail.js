import React from 'react';
import Wrapper from '../assets/wrappers/GpsDetailPage';

import PaiChartComponent from './PaiChartComponent';
import TableChart from './TableChart';

const GpsDetail = () => {
  return (
    <Wrapper>
      <main>
        <div className='full-page'>
          <div className='gps-container'>
            <div className='title'>
              <h1>
                D-1567 <span>Aircraft</span>
              </h1>
            </div>
            <div className='chart-container'>
              <div className='table'>
                <TableChart />
              </div>
              <div className='pai'>
                <PaiChartComponent />
                <div className='pai-data'>
                  <div className='detail'>
                    <li>% Time spent on each location</li>
                    <ul>
                      <ol>L1 </ol>
                      <span>80%</span>
                    </ul>
                    <ul>
                      <ol>L2 </ol>
                      <span>20%</span>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default GpsDetail;
