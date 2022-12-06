import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <h1>GPS</h1>
      </nav>
      <div className='container '>
        <Link to='/login' className='btn'>
          Login/Register
        </Link>
      </div>
    </Wrapper>
  );
};

export default Landing;
