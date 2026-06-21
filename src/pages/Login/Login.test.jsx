import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Login', () => {

  beforeEach(() => {
    mockNavigate.mockClear();
    window.alert = vi.fn();
  });

  it('deve renderizar os campos do formulário', () => {

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText('Usuário')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Senha')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Entrar')
    ).toBeInTheDocument();

  });

  it('deve exibir alerta se os campos estiverem vazios', () => {

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByText('Entrar')
    );

    expect(window.alert).toHaveBeenCalledWith(
      'Por favor, preencha todos os campos.'
    );

  });

  it('deve navegar para a página do usuário', () => {

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText('Usuário'),
      {
        target: {
          value: 'Amanda',
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText('Senha'),
      {
        target: {
          value: '123456',
        },
      }
    );

    fireEvent.click(
      screen.getByText('Entrar')
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      '/vagas/Amanda'
    );

  });

  it('deve navegar para ListarReservasFeitas quando for empresa', () => {

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByRole('combobox'),
      {
        target: {
          value: 'company',
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText('Usuário'),
      {
        target: {
          value: 'EmpresaTeste',
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText('Senha'),
      {
        target: {
          value: '123456',
        },
      }
    );

    fireEvent.click(
      screen.getByText('Entrar')
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      '/ListarReservasFeitas'
    );

  });

  it('deve fazer login ao pressionar Enter na senha', () => {

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText('Usuário'),
      {
        target: {
          value: 'Amanda',
        },
      }
    );

    const senha = screen.getByPlaceholderText('Senha');

    fireEvent.change(senha, {
      target: {
        value: '123456',
      },
    });

    fireEvent.keyDown(senha, {
      key: 'Enter',
      code: 'Enter',
    });

    expect(mockNavigate).toHaveBeenCalledWith(
      '/vagas/Amanda'
    );

  });

});