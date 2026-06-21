import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservaContext } from '../context/ReservaContext';
import { STORAGE_KEYS } from '../constants';
import { calcularValorTotal } from '../utils/reservationUtils';

export const useReservationForm = () => {
  const [reserva, setReserva] = useState({
    nome: '',
    email: '',
    placa: '',
    data: '',
    horaEntrada: '',
    horaSaida: '',
    valorTotal: '',
  });

  const [selectedParking, setSelectedParking] = useState(null);
  const [vagasDisponiveis, setVagasDisponiveis] = useState(0);

  const { adicionarReserva } = useReservaContext();
  const navigate = useNavigate();

  useEffect(() => {
    const storedVaga = localStorage.getItem(STORAGE_KEYS.SELECTED_PARKING);
    if (storedVaga) {
      const parsedVaga = JSON.parse(storedVaga);
      setSelectedParking(parsedVaga);
      setVagasDisponiveis(parsedVaga.vagasdisponiveis);
    }
  }, []);

  const handleChange = (campo, valor) => {
    setReserva((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleCalcularValorTotal = () => {
    if (!selectedParking) return;
    const valorFormatado = calcularValorTotal(
      reserva.horaEntrada,
      reserva.horaSaida,
      selectedParking.valorhora
    );
    handleChange('valorTotal', valorFormatado);
  };

  const handleEnviarReserva = () => {
    if (vagasDisponiveis > 0) {
      setVagasDisponiveis((prev) => prev - 1);

      const novaReserva = {
        id: new Date().getTime(),
        nome: reserva.nome,
        placa: reserva.placa,
        email: reserva.email,
        data: reserva.data,
        horaEntrada: reserva.horaEntrada,
        horaSaida: reserva.horaSaida,
        valorTotal: reserva.valorTotal,
      };

      adicionarReserva(novaReserva);
      navigate('/ListarReservasFeitas', {
        state: { valorTotal: reserva.valorTotal },
      });
    } else {
      alert('Não há mais vagas disponíveis!');
    }
  };

  return {
    reserva,
    selectedParking,
    vagasDisponiveis,
    handleChange,
    handleCalcularValorTotal,
    handleEnviarReserva,
  };
};
