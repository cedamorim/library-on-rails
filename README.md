#Library On Rails

Este projeto tem como base algumas tecnologias como:

* Docker para levantar os ambientes do frontend e backend
* Ruby on Rails como responsável pela parte da api e autenticação
* MySQL como banco de dados
* React.JS e Material UI como frontend


Toda a aplicação foi protegida por uma autenticação usando Token JWT, que é gerado assim que o usuário fizer o login.

Para operação de listagem de livros, não é necessário o JWT pois é livre de autenticação. Mas para criar, deletar ou editar um livro já existente, o JWT será obrigatório.


### Ruby on Rails
* JWT
* Active Record
* JBuilder
* Testes unitários
* Faker para gerar os seeds
* BCrypt 


### React.JS / Material UI
* React Router para gerenciar as rotas
* Axios para fazer as requisições
* PullState para gerenciar estados facilmente
* Formik para cuidar dos formulários 
* Material UI com tema personalizado

## Instruções de uso


Antes de começar a instalar, temos que efetuar algumas configurações. Pegue o **.env.sample** e faça uma cópia e renomeie para **.env** e configure conforme suas necessidades. Lembrando que no docker-compose.yml existem outras configurações, pode ser personalizado também.

Para instalar, rode os comandos abaixo

    ./scripts/install_backend.sh
    ./scripts/install_frontend.sh
    docker-compose up -d

Se deu tudo certo (leva um tempo até subir tudo), você poderá acessar o endereço http://127.0.0.1:3000 (caso não tenha alterado nada)

Para teste, existe um usuário criado com os seguintes dados:

    E-mail: admin@admin.com
    Senha: 123456

Caso queira rodas os testes, execute o seguinte (no diretório da aplicação)

    docker-compose exec backend bash -c "rails test -v"