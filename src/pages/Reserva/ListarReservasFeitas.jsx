
import { useState, useEffect } from 'react';
import { useReservaContext } from '../../context/ReservaContext';
import { calcularValorTotal } from '../../utils/reservationUtils';
import { getSelectedParking } from '../../services/storageService';


const ListarReservasFeitas = () => {
  const [selectedParking, setSelectedParking] = useState(null);
  const { reservationList, editarReserva, excluirReserva } = useReservaContext();
  const [edicao, setEdicao] = useState(null);

  const handleEditar = (id) => {
    setEdicao(id);
  };

  useEffect(() => {
    setSelectedParking(getSelectedParking());
  }, []);

  const handleSalvarEdicao = (id, novaHoraSaida) => {
    const reserva = reservationList.find((r) => r.id === id);
    if (reserva) {
      const novoValorTotal = calcularValorTotal(
        reserva.horaEntrada,
        novaHoraSaida,
        selectedParking.valorhora
      );
      editarReserva(id, {
        horaSaida: novaHoraSaida,
        valorTotal: novoValorTotal,
      });
      setEdicao(null);
    }
  };

  const handleExcluir = (id) => {
    excluirReserva(id);
  };

  return (
    <div
      style={{
        marginLeft: '10px',
        marginTop: '10px',
        width: '350px',
        alignItems: 'center',
      }}
    >
      <h2 className="text-2xl font-bold mb-4" style={{ textAlign: 'center' }}>
        Reservas Feitas:
      </h2>
      {reservationList.map((reserva) => (
        <div
          key={reserva.id}
          className="mb-6 p-4 border border-gray-300 rounded"
          style={{ WebkitBoxShadow: '0px 0px 5px 0px var(--azulclaroapp)' }}
        >
          <p className="mb-2 block text-base font-medium">
            Nome do Cliente: {reserva.nome}
          </p>
          <p className="mb-2 block text-base font-medium">
            Placa do Carro: {reserva.placa}
          </p>
          <p className="mb-2 block text-base font-medium">
            Data da Reserva: {reserva.data}
          </p>
          <p className="mb-2 block text-base font-medium">
            Hora de Entrada: {reserva.horaEntrada}
          </p>
          <p className="mb-2 block text-base font-medium">
            Hora de Saída:{' '}
            {edicao === reserva.id ? (
              <input
                className="mb-2 text-base font-medium"
                type="time"
                value={reserva.horaSaida}
                onChange={(e) => handleSalvarEdicao(reserva.id, e.target.value)}
              />
            ) : (
              <span>{reserva.horaSaida}</span>
            )}
          </p>
          <p className="mb-2 block text-base font-medium">
            Valor da Reserva: {reserva.valorTotal}
          </p>
          <button
            className="bg-[#0335fc] hover:bg-red-700 mx-2 text-white py-2 px-4 rounded mt-4"
            onClick={() => handleExcluir(reserva.id)}
          >
            Excluir
          </button>
          <button
            className="bg-[#0335fc] hover:bg-green-700 mx-4 text-white py-2 px-4 rounded mt-4"
            onClick={() => handleEditar(reserva.id)}
            style={{ marginLeft: '100px' }}
          >
            Editar
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListarReservasFeitas;
