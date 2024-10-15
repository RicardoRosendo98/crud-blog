# CRUD-BLOG![BANCO DE DADOS](https://github.com/user-attachments/assets/cbf4f7b8-27ea-41f6-9960-63d4f29db29d)


## Descrição do Projeto

Este projeto é uma API para um sistema de blog que permite a criação de usuários, login, e gestão de postagens e comentários. A aplicação oferece funcionalidades como registro de usuários, autenticação, e CRUD (criação, leitura, atualização e exclusão) para postagens e comentários.

## Stack Utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework:** Express.js
  - Escolhido pela sua simplicidade e robustez para construir APIs.
- **Banco de Dados:** PostgreSQL
  - Usado por ser um sistema de gerenciamento de banco de dados relacional poderoso e confiável.
- **ORM:** Sequelize
  - Facilita a interação com o banco de dados, permitindo manipulação de dados através de modelos.
- **Autenticação:** JSON Web Token (JWT)
  - Utilizado para gerenciar sessões de usuários de forma segura.

### Pacotes Adicionados

- **cors:** Para permitir solicitações de diferentes origens.
- **helmet:** Para aumentar a segurança da aplicação.
- **morgan:** Para registrar as requisições HTTP.
- **bcryptjs:** Para hash de senhas.
- **jsonwebtoken:** Para geração e verificação de tokens JWT.
- **sequelize:** Para interação com o banco de dados.



## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/RicardoRosendo98/crud-blog
   cd blog-blog


2. instalar dependencias 
npm install


3. iniciar o servidor
npm start ou npde server.js
