import styled from 'styled-components';

const Wrapper = styled.main`
  .full-page {
  }

  .gps-container {
    height: 75vh;
    weidth: 80vw;
    margin: 80px 80px;
    border: 1px solid #828080;
    border-radius: 70px;
  }
  .chart-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    padding-top: 20px;
  }

  .pai {
    width: 600px;
    margin-left: 50px;
    height: 350px;

    display: flex;
    align-items: end;
    justify-content: end;
    border: 2px solid #828080;
    border-radius: 15px;
  }

  .table {
    width: 300px;
    height: 350px;
    margin-right: 50px;
    border: 2px solid #828080;

    border-radius: 5px;
  }

  .title {
    width: 80px;
    height: 50px;
    margin-top: 39px;
    margin-left: 105px;
    color: #fff;
    font-size: 10px;
    line-height: normal;
  }
  h1 {
    font-weight: 100;
  }
  span {
    font-weight: 100;
  }

  ol,
  span {
    font-weight: 100;
    line-height: normal;
  }
  ol,
  li {
    margin: 20px;
  }
  li {
    display: block;

    width: 100px;
    line-height: normal;
  }
  li,
  span {
    font-size: 15px;
    color: white;
  }
  ol {
    color: #505050;
  }
  .pai-data {
    width: 250px;
    height: 348px;
    border-left: 2px solid #828080;
  }
  .pai {
    width: 100%;
    margin-left: 125px;
  }

  .main-pai {
    margin: auto;
  }
  .detail {
    display: block;
    margin: 60px;
  }
`;

export default Wrapper;
