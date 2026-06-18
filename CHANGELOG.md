# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

## [Unreleased]

### Added

- Configuração do Prettier com integração ao ESLint
- Configuração do VS Code para formatação automática ao salvar
- Arquivo src/utils/reservationUtils.js criado com a função calcularValorTotal

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

## [0.1.0] - 2026-06-10

### Added

- Versão original do projeto desenvolvida para a disciplina de Frontend
