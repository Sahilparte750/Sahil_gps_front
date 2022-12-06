import styled from 'styled-components';

const Wrapper = styled.main`
   .full-page {
    margin: 100px 100px;
    padding: 100px 100px;
  }
  .form {
    height: 75vh;
    weidth: 80vw;
    margin: 80px 80px;

    border: 1px solid #828080;
    border-radius: 70px;
  }
  .btn-block {
    color: #000;
    background: #df4c4c;
    width: 30%;
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    font-weight: bolder;
  }
  .btn-hero {
    color: #828080;
    background: none;
    font-weight: bolder;
    padding-top: 20px;
  }

  @media screen and (max-width: 992px) {
    .btn-block {
      color: #000;
      background: #df4c4c;
      width: 80%;
      padding: 0.375rem 0.75rem;
      border-radius: 20px;
      font-weight: bolder;
    },
    
  }
    
  
  input {
    padding: 10px;
    
    margin-left:auto;
    margin-right:auto;
    border-radius: 20px;
    color: #fff;
    background: #1e1e1e;
    border: none;
  
  }
  input placeholder {
    color: #505050;
  }
`;

export default Wrapper;
