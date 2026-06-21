import { useReservationForm } from '../../hooks/useReservationForm';

const ReservaForm = () => {
  const {
    reserva,
    selectedParking,
    vagasDisponiveis,
    handleChange,
    handleCalcularValorTotal,
    handleEnviarReserva,
  } = useReservationForm();

  return (
    <div className="p-2" style={{ border: '10px solid var(--azulclaroapp)' }}>
      <form>
        <div className="mb-3">
          <div className="mb-4 rounded bg-gray-200 p-2 shadow">
            <p className="mb-3 text-xl font-bold">
              Reservas disponíveis: {vagasDisponiveis} reservas
            </p>
            {selectedParking ? (
              <div>
                <h2>{selectedParking.estabelecimento}</h2>
                <p>Localização: {selectedParking.localizacao}</p>
                <p>Horário de Funcionamento: {selectedParking.horario}</p>
                <p>Contato: {selectedParking.contato}</p>
                <p>Valor por Hora: R${selectedParking.valorhora}/Hr</p>
              </div>
            ) : (
              <p>Nenhuma vaga selecionada</p>
            )}
          </div>
          <label htmlFor="name" className="mb-2 block text-base font-medium">
            Seu nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="placa" className="mb-2 block text-base font-medium">
            Sua placa
          </label>
          <input
            id="placa"
            name="placa"
            type="text"
            placeholder="Digite sua placa"
            className="rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.placa}
            onChange={(e) => handleChange('placa', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-base font-medium">
            Seu E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="data" className="block text-base font-medium">
            Data:
          </label>
          <input
            id="data"
            type="date"
            className="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.data}
            onChange={(e) => handleChange('data', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="timeStart" className="block text-base font-medium">
            Hora de entrada:
          </label>
          <input
            id="timeStart"
            name="time"
            type="time"
            className="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.horaEntrada}
            onChange={(e) => handleChange('horaEntrada', e.target.value)}
            onBlur={handleCalcularValorTotal}
          />
          <label htmlFor="timeEnding" className="block text-base font-medium">
            Hora de saída:
          </label>
          <input
            id="timeEnding"
            type="time"
            name="time"
            className="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.horaSaida}
            onChange={(e) => handleChange('horaSaida', e.target.value)}
            onBlur={handleCalcularValorTotal}
          />
        </div>
        <div>
          <label htmlFor="valorTotal" className="block text-base font-medium">
            Valor Total:
          </label>
          <input
            id="valorTotal"
            type="text"
            name="valorTotal"
            className="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.valorTotal}
            readOnly
          />
          <button
            type="button"
            className="bg-[#0335fc] text-white py-2 px-4 rounded mt-4"
            onClick={handleEnviarReserva}
          >
            Enviar Reserva
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservaForm;

