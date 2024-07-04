# Aplicação Web Full-Stack

Esta é uma aplicação web full-stack composta por um front-end desenvolvido com Angular (TypeScript e SCSS) e um back-end desenvolvido com Java Spring Boot. A aplicação fornece funcionalidades simples de login e registro.

## Frontend

O front-end roda em `http://localhost:4200` e possui os seguintes endpoints:

- `http://localhost:4200/user`: Dashboard do usuário
- `http://localhost:4200/login`: Página de login
- `http://localhost:4200/register`: Página de registro

### Iniciando o Frontend

1. **Instalar Angular CLI**: Se você ainda não instalou o Angular CLI, pode fazê-lo com o seguinte comando:

    ```sh
    npm install -g @angular/cli
    ```

2. **Clonar o repositório** e navegar até o diretório do frontend:

    ```sh
    git clone <url-do-repositório>
    cd frontend
    ```

3. **Instalar dependências**:

    ```sh
    npm install
    ```

4. **Rodar a aplicação frontend**:

    ```sh
    ng serve
    ```

    A aplicação estará disponível em `http://localhost:4200`.

## Backend

O back-end roda na porta `8080` e possui os seguintes endpoints:

- `POST /auth/login`: Endpoint de login
- `POST /auth/register`: Endpoint de registro

### Iniciando o Backend

1. **Clonar o repositório** e navegar até o diretório do backend:

    ```sh
    git clone <url-do-repositório>
    cd backend
    ```

2. **Adicionar configuração do banco de dados**: Crie um arquivo `application.properties` no diretório `src/main/resources` com a configuração do seu banco de dados. Aqui está um exemplo de configuração para PostgreSQL:

    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/seu-banco-de-dados
    spring.datasource.username=seu-usuario
    spring.datasource.password=sua-senha
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    ```

    Você pode usar qualquer banco de dados modificando a configuração conforme necessário.

3. **Compilar e rodar a aplicação backend**:

    ```sh
    ./mvnw spring-boot:run
    ```

    A aplicação backend estará disponível em `http://localhost:8080`.

## Tecnologias Utilizadas

- **Frontend**: Angular, TypeScript, SCSS
- **Backend**: Java, Spring Boot
- **Banco de Dados**: PostgreSQL (ou qualquer banco de dados de sua escolha)

## Licença

Este projeto está licenciado sob a Licença MIT.
