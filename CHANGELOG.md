# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

## [Unreleased]

### Added

- Configuração do Prettier com integração ao ESLint
- Configuração do VS Code para formatação automática ao salvar
- Arquivo src/utils/reservationUtils.js criado com a função calcularValorTotal
- Hook useReservationForm criado para encapsular o estado e lógica do formulário
  de reserva

### Removed

- Bloco de CSS comentado removido do index.css
- UserContext não utilizado removido do Login.jsx
- TopBarComp.jsx duplicado removido, substituído pelo TopBar.jsx existente
- Pasta empty removida

### Changed

- Magic strings e numbers substituídos por constantes em ReservaForm.jsx
- Magic strings e numbers substituídos por constantes em ListarReservasFeitas.jsx
- Rotas substituídas por constantes no App.jsx
- Magic strings substituídas por constantes no Estacionamentos.jsx
- Magic strings substituídas por constantes no App.jsx
- Magic strings substituídas por constantes no Profile.jsx
- calcularValorTotal removida de ReservaForm.jsx e ListarReservasFeitas.jsx, agora importada de reservationUtils.js
- Função handleregister renomeada para handleRegister no RegisterPage.jsx
- Varíavel items renomeada para parkingLots no Estacionamentos.jsx
- Varíavel items renomeada para parkingLots no EstacionamentoLanding.jsx
- Parâmetros campo e valor renomeados para field e value no
  ReservaEstacionamento.jsx
- Renomear vagaSelecionada para selectedParking em ReservaForm.jsx e
  ListarReservasFeitas.jsx
- Varíavel listarReservas renomeada para reservationList no ReservaContext.js
- ReservaForm.jsx simplificado para componente de apresentação, usando useReservationForm
- ReservaEstacionamento.jsx simplificado, removido estado de reserva redundante
- Corrigidos atributos class/htmlfor para className/htmlFor no ReservaForm.jsx

### Fixed

- Imports não utilizados de React removidos em TopBar, ErrorPage, Estacionamentos, EstacionamentoLanding, Landing, TopBarLanding, Login, RegisterPage e Profile
- Import não utilizado de useContext removido em TopBar.jsx
- Import não utilizado de ReservaEstacionamento removido em TopBarLanding.jsx
- Setter setCNPJ não utilizado removido em RegisterPage.jsx
- Aspas no texto de Landing.jsx escapadas como entidade HTML
- Caminho de importação de logo corrigido em Landing.jsx
- PropTypes adicionados em RegisterPage.jsx e Profile.jsx

## [0.1.0] - 2026-06-10

### Added

- Versão original do projeto desenvolvida para a disciplina de Frontend
