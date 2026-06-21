# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

## [Unreleased]

### Added

* Configuração do Prettier com integração ao ESLint
* Configuração do VS Code para formatação automática ao salvar
* Arquivo src/utils/reservationUtils.js criado com a função calcularValorTotal
* Hook useReservationForm criado para encapsular o estado e lógica do formulário
  de reserva

### Removed

* Bloco de CSS comentado removido do index.css
* UserContext não utilizado removido do Login.jsx
* TopBarComp.jsx duplicado removido, substituído pelo TopBar.jsx existente
* Pasta empty removida

### Changed

* Magic strings e numbers substituídos por constantes em ReservaForm.jsx
* Magic strings e numbers substituídas por constantes em ListarReservasFeitas.jsx
* Rotas substituídas por constantes no App.jsx
* Magic strings substituídas por constantes no Estacionamentos.jsx
* Magic strings substituídas por constantes no App.jsx
* Magic strings substituídas por constantes no Profile.jsx
* calcularValorTotal removida de ReservaForm.jsx e ListarReservasFeitas.jsx, agora importada de reservationUtils.js
* Função handleregister renomeada para handleRegister no RegisterPage.jsx
* Variável items renomeada para parkingLots no Estacionamentos.jsx
* Variável items renomeada para parkingLots no EstacionamentoLanding.jsx
* Parâmetros campo e valor renomeados para field e value no ReservaEstacionamento.jsx
* Renomeado vagaSelecionada para selectedParking em ReservaForm.jsx e ListarReservasFeitas.jsx
* Variável listarReservas renomeada para reservationList no ReservaContext.jsx
* ReservaForm.jsx simplificado para componente de apresentação, utilizando o hook useReservationForm
* ReservaEstacionamento.jsx simplificado, removido estado de reserva redundante
* Corrigidos atributos class/htmlfor para className/htmlFor no ReservaForm.jsx

### Fixed

* Imports não utilizados de React removidos em TopBar, ErrorPage, Estacionamentos, EstacionamentoLanding, Landing, TopBarLanding, Login, RegisterPage e Profile
* Import não utilizado de useContext removido em TopBar.jsx
* Import não utilizado de ReservaEstacionamento removido em TopBarLanding.jsx
* Setter setCNPJ não utilizado removido em RegisterPage.jsx
* Aspas no texto de Landing.jsx escapadas como entidade HTML
* Caminho de importação de logo corrigido em Landing.jsx
* PropTypes adicionados em RegisterPage.jsx e Profile.jsx

### Tests

* Testes unitários implementados para ReservaContext.jsx
* Testes unitários implementados para Login.jsx
* Testes unitários implementados para RegisterPage.jsx
* Testes unitários implementados para ReservaForm.jsx
* Configurado ambiente de testes com Vitest, Testing Library e cobertura V8
* Cobertura de 100% de statements, funções e linhas em Login.jsx
* Cobertura de 100% de statements, funções e linhas em RegisterPage.jsx
* Cobertura de 100% de statements, funções e linhas em ReservaContext.jsx
* Cobertura de 100% de statements e linhas em ReservaForm.jsx
* Total de 18 testes automatizados implementados e aprovados

## [0.1.0] - 2026-06-10

### Added

* Versão original do projeto desenvolvida para a disciplina de Frontend
