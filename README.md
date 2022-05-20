# Boas vindas ao Projeto To Do List

Este projeto cria API e endpoints para manipulação de dados e renderização através da conexão com a aplicação front end.

## Funcionalidades da aplicação

Com esta aplicação podemos visualizar lista tarefas, com descrição da tarefa, status, prioridade de execução e data de inserção no bancode dados.
Todas as informações utilizadas estão armazenadas no banco de dados e passíveis de manipulação.

### Tecnologias utilizadas

Aplicação desenvolvida com `React.js`, com gerenciamento de estado por meio de `Hooks`.
Aplicação recebe e trata promisses proveniente do retorno de informações do projeto `Back End`.
Estilização da página desenvolvida em `Bootstrap`.

### Acesso ao Deploy do projeto

Realizado deploy da aplicação na plataforma Heroku e disponível em:
* https://listofcarsfrontend.herokuapp.com/cars

### Ilustração da aplicação em funcionamento

<img alt="Gif funcionamento da aplicação" width=400px src="src/images/fullStackGif.gif" />

## Para rodar a aplicação localmente

1. Clone o repositório, com o comando:
    * `git@github.com:welcksonvalentim/toDoList-FrontEnd.git`

2. Entre na pasta do repositório que você acabou de clonar:
    * `cd toDoList-FrontEnd`

3. Instale as dependências e inicialize o projeto:
    * `npm install`

4. Inicialize o projeto:
    * `npm start`

### Próximos Passos do Projeto

* Finalizar função de excluir tarefas;
* Desenvolver função de editar tarefas;
* Desenvolver testes de integração;
