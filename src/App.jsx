import './index.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/LandingPage/Landing.jsx';
import EstacionamentoLanding from './pages/LandingPage/EstacionamentoLanding.jsx';
import Login from './pages/Login/Login.jsx';
import RegisterPage from './pages/Register/RegisterPage.jsx';
import Detalhevagas from './pages/Home/Estacionamentos.jsx';
import TopBar from './components/TopBar/TopBar.jsx';
import TopBarLanding from './pages/LandingPage/TopBarLanding.jsx';
import ErrorPage from './pages/Error/ErrorPage';
import ReservaEstacionamento from './pages/Reserva/ReservaEstacionamento';
import ListarReservasFeitas from './pages/Reserva/ListarReservasFeitas';
import { ReservaProvider } from './context/ReservaContext';
import ProfilePage from './pages/profile/Profile';
import { ROUTES } from './constants';

const App = () => {
  const [userData, setUserData] = React.useState(() => {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  });

  const handleRegister = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
  };

  const handleDeleteData = () => {
    localStorage.removeItem('userData');
    setUserData(null);
  };

  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: (
        <>
          <TopBarLanding />
          <Landing />
        </>
      ),
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: ROUTES.REGISTER,
      element: <RegisterPage onRegister={handleRegister} />,
    },
    {
      path: ROUTES.PROFILE,
      element: (
        <ProfilePage userData={userData} onDeleteData={handleDeleteData} />
      ),
    },
    {
      path: ROUTES.PARKING_LOTS,
      element: (
        <>
          <TopBar />
          <Detalhevagas />
        </>
      ),
    },
    {
      path: ROUTES.ESTACIONAMENTOS,
      element: (
        <>
          <TopBarLanding />
          <EstacionamentoLanding />
        </>
      ),
    },
    {
      path: ROUTES.RESERVA,
      element: (
        <>
          <TopBar />
          <ReservaEstacionamento />
        </>
      ),
    },
    {
      path: ROUTES.LISTAR_RESERVAS,
      element: (
        <>
          <TopBar />
          <ListarReservasFeitas />
        </>
      ),
    },
    {
      path: '/*',
      element: (
        <>
          <ErrorPage />
        </>
      ),
    },
  ]);

  return (
    <ReservaProvider>
      <RouterProvider router={router} />
    </ReservaProvider>
  );
};
export default App;
