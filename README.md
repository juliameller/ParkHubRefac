# ParkHub - Refatoração

O ParkHub é um sistema web de gerenciamento e reserva de vagas de estacionamentos que permite o cadastro, edição e autenticação de usuários, visualização de dados dos estacionamentos cadastrados e realização de reservas de vagas.

Projeto desenvolvido originalmente para a disciplina de Frontend e refatorado nesta entrega aplicando princípios de Clean Code.

## Funcionalidades

- Cadastro e login de usuário
- Listagem de estacionamentos parceiros com preço e disponibilidade
- Reserva de vaga com cálculo automático do valor total
- Gerenciamento de reservas feitas (editar horário de saída e excluir)
- Edição de perfil do usuário

## Principais problemas e refatorações

| Problema                                                 | Solução aplicada                                                                                           |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Nomes ruins e inconsistentes                             | Identificadores renomeados para nomes que descrevem o que representam, padronizados em inglês              |
| Código duplicado (TopBar/TopBarComp, calcularValorTotal) | TopBarComp removido e unificado com TopBar; calcularValorTotal movida para `src/utils/reservationUtils.js` |
| God Component (ReservaForm)                              | Estado e lógica extraídos para o hook `useReservationForm`; componente passou a ser só apresentação        |
| Código morto                                             | Bloco de CSS comentado, UserContext não utilizado e arquivo duplicado removidos                            |
| Magic strings e numbers                                  | Centralizados em `src/constants/index.js` (rotas, chaves do localStorage, data base de cálculo)            |
| localStorage sem abstração                               | Centralizado em `src/services/storageService.js`, com tratamento de erro no parse                          |
| Estilos inline espalhados pelo código                    | Identificado, não refatorado nesta entrega — ver justificativa abaixo                                      |

### Sobre os estilos inline

Praticamente todos os componentes definem seus estilos como objetos JavaScript diretamente no JSX, o que mistura responsabilidades de apresentação com a estrutura dos componentes. Esse problema foi identificado mas não foi endereçado nesta refatoração: mover os estilos para arquivos externos não altera o comportamento do sistema nem a lógica do código, então o impacto seria majoritariamente estético, além de exigir bastante trabalho de implementação. Optamos por priorizar os problemas que afetam legibilidade da lógica, manutenibilidade e estrutura do código.

## Testes

<!-- A PREENCHER: descrição dos testes implementados e cobertura atingida -->

## Ferramentas utilizadas

- **ESLint** — análise estática e padronização do código
- **Prettier** — formatação automática
- **Vitest + Testing Library** — testes unitários

## Instalação e execução

```bash
# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev

# Rodar o linter
npm run lint
```

## Estrutura de branches

- `original` — versão do projeto antes da refatoração
- `main` — versão refatorada

## Documentação adicional

- [`CHANGELOG.md`](./CHANGELOG.md) — histórico de mudanças
