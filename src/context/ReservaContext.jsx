import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

const ReservaContext = createContext();

export const useReservaContext = () => {
  return useContext(ReservaContext);
};

export const ReservaProvider = ({ children }) => {
  const [reservationList, setReservationList] = useState([]);

  const adicionarReserva = useCallback((novaReserva) => {
    setReservationList((prev) => [...prev, novaReserva]);
  }, []);

  const editarReserva = useCallback((id, novosDados) => {
    setReservationList((prev) =>
      prev.map((reserva) =>
        reserva.id === id ? { ...reserva, ...novosDados } : reserva
      )
    );
  }, []);

  const excluirReserva = useCallback((id) => {
    setReservationList((prev) => prev.filter((reserva) => reserva.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      reservationList,
      adicionarReserva,
      editarReserva,
      excluirReserva,
    }),
    [reservationList, adicionarReserva, editarReserva, excluirReserva]
  );

  return (
    <ReservaContext.Provider value={value}>
      {children}
    </ReservaContext.Provider>
  );
};

ReservaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

