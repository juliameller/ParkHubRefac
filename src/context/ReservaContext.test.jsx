import React from 'react';

import {
  describe,
  it,
  expect,
  beforeEach,
} from 'vitest';

import {
  render,
  screen,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import {
  ReservaProvider,
  useReservaContext,
} from './ReservaContext';

function TestComponent() {

  const {

    reservationList,

    adicionarReserva,

    editarReserva,

    excluirReserva,

  } = useReservaContext();

  return (

    <>

      <button
        onClick={() =>
          adicionarReserva({

            id: 1,

            nome: 'Amanda',

          })
        }
      >

        Adicionar

      </button>

      <button
        onClick={() =>
          editarReserva(

            1,

            {

              nome: 'Amanda Silva',

            }

          )
        }
      >

        Editar

      </button>

      <button

        onClick={() => excluirReserva(1)}

      >

        Excluir

      </button>

      <p data-testid="quantidade">

        {reservationList.length}

      </p>

      <p data-testid="nome">

        {reservationList[0]?.nome || ''}

      </p>

    </>

  );

}

describe('ReservaContext', () => {

  beforeEach(() => {

    cleanup();

  });

  it('deve adicionar reserva', () => {

    render(

      <ReservaProvider>

        <TestComponent />

      </ReservaProvider>

    );

    fireEvent.click(

      screen.getByText(

        'Adicionar'

      )

    );

    expect(

      screen.getByTestId(

        'quantidade'

      ).textContent

    ).toBe('1');

    expect(

      screen.getByTestId(

        'nome'

      ).textContent

    ).toBe('Amanda');

  });

  it('deve editar reserva', () => {

    render(

      <ReservaProvider>

        <TestComponent />

      </ReservaProvider>

    );

    fireEvent.click(

      screen.getByText(

        'Adicionar'

      )

    );

    fireEvent.click(

      screen.getByText(

        'Editar'

      )

    );

    expect(

      screen.getByTestId(

        'nome'

      ).textContent

    ).toBe(

      'Amanda Silva'

    );

  });

  it('deve excluir reserva', () => {

    render(

      <ReservaProvider>

        <TestComponent />

      </ReservaProvider>

    );

    fireEvent.click(

      screen.getByText(

        'Adicionar'

      )

    );

    fireEvent.click(

      screen.getByText(

        'Excluir'

      )

    );

    expect(

      screen.getByTestId(

        'quantidade'

      ).textContent

    ).toBe('0');

  });

});