import ReservaForm from './ReservaForm';

const ReservaEstacionamento = () => {
  return (
    <div className="p-2">
      <h1
        className="text-2xl text-white flex items-center justify-between rounded-t-lg py-4 px-9"
        style={{ backgroundColor: 'var(--azulclaroapp)' }}
      >
        Reserva de Estacionamento
      </h1>

      <ReservaForm />
    </div>
  );
};

export default ReservaEstacionamento;

