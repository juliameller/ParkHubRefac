import { BASE_DATE_FOR_TIME_CALC } from '../constants';

export const calcularValorTotal = (horaEntrada, horaSaida, valorHora) => {
  const entrada = new Date(`${BASE_DATE_FOR_TIME_CALC}${horaEntrada}`);
  const saida = new Date(`${BASE_DATE_FOR_TIME_CALC}${horaSaida}`);

  const diferencaEmMilissegundos = saida - entrada;
  const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);
  const valorTotal = diferencaEmHoras * parseFloat(valorHora);

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valorTotal);
};
