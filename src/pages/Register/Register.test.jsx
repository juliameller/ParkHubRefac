import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from './RegisterPage';

const mockNavigate = vi.fn();
const mockOnRegister = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Register', () => {

  beforeEach(() => {

    mockNavigate.mockClear();
    mockOnRegister.mockClear();

    window.alert = vi.fn();

  });

  it('deve renderizar os campos do formulário', () => {

    render(
      <MemoryRouter>
        <Register onRegister={mockOnRegister} />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText('Nome Completo')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Nome de Usuário')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('CPF')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('E-mail')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Senha')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Repita a senha')
    ).toBeInTheDocument();

  });

  it('deve exibir alerta se os campos estiverem vazios', () => {

    render(
      <MemoryRouter>
        <Register onRegister={mockOnRegister} />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByText('Cadastrar')
    );

    expect(window.alert).toHaveBeenCalledWith(
      'Por favor, preencha todos os campos.'
    );

  });

  it('deve cadastrar usuário e navegar para login', () => {

    render(
      <MemoryRouter>
        <Register onRegister={mockOnRegister} />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByPlaceholderText('Nome Completo'),
      {
        target: {
          value: 'Amanda',
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText('Nome de Usuário'),
      {
        target: {
          value: 'amanda123',
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText('CPF'),
      {
        target: {
          value: '12345678900',
        },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText('E-mail'),
      {
        target: {
          value: 'amanda@gmail.com',
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

    fireEvent.change(
      screen.getByPlaceholderText('Repita a senha'),
      {
        target: {
          value: '123456',
        },
      }
    );

    fireEvent.click(
      screen.getByText('Cadastrar')
    );

    expect(mockOnRegister).toHaveBeenCalledWith({
      name: 'Amanda',
      username: 'amanda123',
      CPF: '12345678900',
      email: 'amanda@gmail.com',
      password: '123456',
      loginType: 'user',
      CNPJ: '',
    });

    expect(mockNavigate).toHaveBeenCalledWith(
      '/login'
    );

  });

  it('deve alterar para empresa e mostrar campo CNPJ', () => {

    render(
      <MemoryRouter>
        <Register onRegister={mockOnRegister} />
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

    expect(
      screen.getByPlaceholderText('Nome da Empresa')
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('CNPJ')
    ).toBeInTheDocument();

  });

  it('deve alterar o estilo do botão ao passar o mouse', () => {

    render(
      <MemoryRouter>
        <Register onRegister={mockOnRegister} />
      </MemoryRouter>
    );

    const botao = screen.getByText('Cadastrar');

    fireEvent.mouseEnter(botao);

    expect(botao.style.transform)
      .toBe('scale(1.1)');

    fireEvent.mouseLeave(botao);

    expect(botao.style.transform)
      .toBe('scale(1)');

  });

});