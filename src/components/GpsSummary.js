import Wrapper from '../assets/wrappers/GpsSummaryPage';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DataTable, { createTheme } from 'react-data-table-component';
import { FaSort } from 'react-icons/fa';

import { FaArrowRight } from 'react-icons/fa';

const GpsSummary = () => {
  const [gpsData, setGpsData] = useState([]);
  const [search, setSearch] = useState('');

  let navigate = useNavigate();
  const routeChange = () => {
    let path = '/gpsdetail';
    navigate(path);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let result = await fetch('http://localhost:5000/data', {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token')),
      },
    });
    result = await result.json();
    setGpsData(result);
  };
  const searchData = async (event) => {
    let key = event.target.value;
    console.log(key);
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);

      result = await result.json();
      if (result) {
        setGpsData(result);
      }
    } else {
      getData();
    }
  };

  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(gpsData);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const columns = [
    {
      name: 'DeviceId',
      selector: (row) => row.DeviceId,

      sortable: true,
      style: {
        background: '#000',

        height: '40px',
      },
    },
    {
      name: 'Device Type',
      selector: (row) => row.DeviceType,
      sortable: true,
      style: {
        background: '#000',

        height: '40px',
      },
    },
    {
      name: 'Latest TimeStamp',
      selector: (row) => row.TimeStamp,
      style: {
        background: '#000',

        height: '40px',
      },
    },
    {
      name: 'Latest Location',
      selector: (row) => row.Location,
      style: {
        background: '#000',

        height: '40px',
      },
    },
    {
      name: '  ',
      selector: (row) => <FaArrowRight onClick={routeChange} />,
      style: {
        background: '#000',
        left: '120px',
        height: '40px',
      },
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '30px', // override the row height
        padding: '5px',

        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
      },
    },

    header: {
      style: {
        textAlign: 'start',
        width: '200px',
        padding: '5px',
        paddingBottom: '2px',
        marginLeft: '135px',
        marginTop: '10px',

        width: '80%',
      },
    },
    subHeader: {
      style: {
        background: '#000',
        color: '505050',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
      },
    },
    headRow: {
      style: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
      },
    },

    pagination: {
      style: {
        fontSize: '10px',
        color: '#505050',
        fontWeight: 'bold',
        paddingTop: '31px',
        backgroundColor: '#000',
        width: '400px',
        position: 'absolute',
        bottom: '450px',
        left: '795px',
        zIndex: '1',
        height: '43px',
        border: 'none',
      },
    },
    paginationButtons: {
      style: {
        background: 'red',
      },
    },
  };
  createTheme(
    'solarized',
    {
      text: {
        primary: '#fff',
        secondary: '#dadce0',
      },
      background: {
        default: '#000',
      },
    },
    'dark'
  );

  return (
    <Wrapper>
      <main>
        <div className='full-page'>
          <div className='gps-container'>
            <div className='table'>
              <DataTable
                columns={columns}
                title='GPS Summary '
                data={gpsData}
                progressPending={pending}
                pagination
                fixedHeader
                sortIcon={<FaSort />}
                paginationPerPage='5'
                paginationDefaultPage={1}
                paginationIconFirstPage
                paginationIconLastPage
                customStyles={customStyles}
                theme='solarized'
                subHeader
                subHeaderComponent={
                  <input
                    type='text'
                    className='search-product-box'
                    placeholder='Search by Device Id / Type '
                    onChange={searchData}
                  />
                }
                subHeaderAlign='left'
              />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default GpsSummary;
