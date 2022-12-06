import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Error, Login, NewUser } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GpsDetail, GpsSummary } from './components';
import PrivateComponent from './components/PrivateComponents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponent />} />
        <Route path='/' element={<GpsSummary />} />
        <Route path='landing' element={<Landing />} />
        <Route path='login' element={<Login />} />
        <Route path='newuser' element={<NewUser />} />
        <Route path='gpsdetail' element={<GpsDetail />} />

        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
