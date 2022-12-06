import styled from 'styled-components';

const Wrapper = styled.main`
  .main-table {
    width: 298px;
    height: 348px;
  }

  th,
  td {
    padding: 5px;
    border: 1.6px solid #828080;
  }
  th {
    color: #505050;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    text-align: center;
    margin: 0px;
    color: white;
    font-weight: 100;
  }

  tr:first-child td:first-child {
    border-top-left-radius: 10px;
  }
  tr:first-child td:last-child {
    border-top-right-radius: 10px;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }
`;
export default Wrapper;
