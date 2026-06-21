import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservaForm from './ReservaForm';
import { useReservationForm } from '../../hooks/useReservationForm';

vi.mock('../../hooks/useReservationForm', () => ({
  useReservationForm: vi.fn(),
}));

describe('ReservaForm', () => {
  const handleChange = vi.fn();
  const handleCalcularValorTotal = vi.fn();
  const handleEnviarReserva = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    useReservationForm.mockReturnValue({
      reserva: {
        nome: '',
        placa: '',
        email: '',
        data: '',
        horaEntrada: '',
        horaSaida: '',
        valorTotal: '',
      },

      selectedParking: {
        estabelecimento: 'Estacionamento Central',
        localizacao: 'Centro',
        horario: '08:00 às 22:00',
        contato: '(48) 99999-9999',
        valorhora: 8,
      },

      vagasDisponiveis: 10,

      handleChange,
      handleCalcularValorTotal,
      handleEnviarReserva,
    });
  });

  it('deve renderizar as informações do estacionamento', () => {
    render(<ReservaForm />);

    expect(
      screen.getByText('Estacionamento Central')
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Reservas disponíveis:/)
    ).toHaveTextContent('10 reservas');

    expect(
      screen.getByText('Localização: Centro')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Horário de Funcionamento: 08:00 às 22:00')
    ).toBeInTheDocument();
  });

  it('deve chamar handleChange ao preencher os campos', () => {
    render(<ReservaForm />);

    fireEvent.change(
      screen.getByPlaceholderText('Digite seu nome'),
      {
        target: {
          value: 'Amanda',
        },
      }
    );

    expect(handleChange).toHaveBeenCalledWith(
      'nome',
      'Amanda'
    );

    fireEvent.change(
      screen.getByPlaceholderText('Digite sua placa'),
      {
        target: {
          value: 'ABC1234',
        },
      }
    );

    expect(handleChange).toHaveBeenCalledWith(
      'placa',
      'ABC1234'
    );

    fireEvent.change(
      screen.getByPlaceholderText('Digite seu E-mail'),
      {
        target: {
          value: 'amanda@gmail.com',
        },
      }
    );

    expect(handleChange).toHaveBeenCalledWith(
      'email',
      'amanda@gmail.com'
    );
  });

  it('deve chamar handleCalcularValorTotal ao sair dos campos de horário', () => {
    render(<ReservaForm />);

    fireEvent.blur(
      screen.getByLabelText('Hora de entrada:')
    );

    expect(
      handleCalcularValorTotal
    ).toHaveBeenCalled();

    fireEvent.blur(
      screen.getByLabelText('Hora de saída:')
    );

    expect(
      handleCalcularValorTotal
    ).toHaveBeenCalledTimes(2);
  });

  it('deve chamar handleEnviarReserva ao clicar em enviar', () => {
    render(<ReservaForm />);

    fireEvent.click(
      screen.getByText('Enviar Reserva')
    );

    expect(
      handleEnviarReserva
    ).toHaveBeenCalled();
  });

  it('deve mostrar mensagem quando não houver vaga selecionada', () => {
    useReservationForm.mockReturnValue({
      reserva: {
        nome: '',
        placa: '',
        email: '',
        data: '',
        horaEntrada: '',
        horaSaida: '',
        valorTotal: '',
      },

      selectedParking: null,

      vagasDisponiveis: 0,

      handleChange,
      handleCalcularValorTotal,
      handleEnviarReserva,
    });

    render(<ReservaForm />);

    expect(
      screen.getByText('Nenhuma vaga selecionada')
    ).toBeInTheDocument();

    expect(
      screen.getByText(/0 reservas/)
    ).toBeInTheDocument();
  });
});