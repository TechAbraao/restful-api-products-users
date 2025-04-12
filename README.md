<h2 align="center"> 👨‍💻 API RESTful para Sistema de Gerenciamento de Produtos e Usuários 👨‍💻 </h2>
<p align="center">
  <a href="#">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#">Equipe</a>
</p>

## 📋 Sobre o projeto
- Este projeto foi desenvolvido como parte da disciplina **Desenvolvimento Web II**, ministrada pelo <a href="https://github.com/faustinopsy">Prof. Rodrigo Faustino</a>.
- Trata-se de uma **API RESTful** para gerenciamento de **produtos** e **usuários**.
- A API permite realizar operações de **CRUD** (*Criar, Ler, Atualizar e Excluir*), tanto para produtos quanto para usuários.

## 💡 Tecnologias e Ferramentas

<div align="center">
  <img alt="Static Badge" src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript&logoSize=60"> 
  <img alt="Static Badge" src="https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoSize=60"> 
  <img alt="Static Badge" src="https://img.shields.io/badge/Express.js-black?style=for-the-badge&logo=Express&logoSize=60"> 
  <img alt="Static Badge" src="https://img.shields.io/badge/Nodemon-black?style=for-the-badge&logo=Nodemon&logoSize=60"> 
  <img alt="Static Badge" src="https://img.shields.io/badge/MySQL-black?style=for-the-badge&logo=mysql&logoSize=60">
  <img alt="Static Badge" src="https://img.shields.io/badge/Postman-black?style=for-the-badge&logo=postman&logoSize=60">
</div>

## 📌 Como usar

### 🔧 Pré-requisitos

- IDE de sua preferência (VS Code, WebStorm, etc.)  
- Conhecimento básico em **JavaScript, Node.js e Express.js**  
- Banco de dados **MySQL** configurado  
- **Postman** para testar requisições HTTP  

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/TechAbraao/restful-api-products-users.git
```

### 2️⃣ Entre no diretório do projeto

```bash
cd restful-api-products-users
```

### 3️⃣ Instale todas as dependências

```bash
npm install
```

### 4️⃣ Configure o arquivo `.env`
Renomeie o arquivo `.env.example` para `.env` e edite as variáveis de ambiente conforme necessário:

```bash
HOST=<HOST>
PORT=<PORT>
HOST_DB=<HOST_DATABASE>
USER_DB=<USER_DATABASE>
PASSWORD_DB=<PASSWORD_DATABASE>
DB_NAME=<DATABASE_NAME>
```

### 5️⃣ Inicie a aplicação
```bash
npm run dev
```

# 🔌 Endpoints da API  

## 📦 Produtos  

### Listar todos os produtos  
- `GET /api/produtos`  

### Buscar produto pelo ID  
- `GET /api/produtos/:id`  

### Adicionar um novo produto  
- `POST /api/produtos`  

### Atualizar um produto existente  
- `PUT /api/produtos/:id`  

### Excluir um produto pelo ID  
- `DELETE /api/produtos/:id`  

---  

## 👥 Usuários  

### Listar todos os usuários  
- `GET /api/usuarios`  

### Buscar usuário pelo ID  
- `GET /api/usuarios/:id`  

### Adicionar um novo usuário  
- `POST /api/usuarios`  

### Atualizar um usuário existente  
- `PUT /api/usuarios/:id`  

### Excluir um usuário pelo ID  
- `DELETE /api/usuarios/:id`  

## 🎯 Equipe

<table style="width: 100%; text-align: center;">
  <tr>
    <td align="center">
      <img src="public/imgs/abraao.png" width="150px" alt="AS" /><br/>
      <b>Abraão Santos</b>
    </td>
    <td align="center">
      <img src="public/imgs/leandro.png" width="140px" alt="LL" /><br/>
      <b>Leandro Lopes</b>
    </td>
  </tr>
</table>
