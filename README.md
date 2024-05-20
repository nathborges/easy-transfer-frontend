# EasyTransferFrontend
O EasyTransfer é uma aplicação de transferência de valores entre as contas. O seu propósito é ajudar as pessoas se organizarem financeiramente, conseguirem transferir valores entre contas de forma rápida e fácil.

Link do backend: https://github.com/nathborges/easy-transfer-backend

## O que o usuário pode fazer

O usuário pode criar uma conta, depositar um valor em sua conta e transferir livremente para outras contas que existem.

## Como executar
Clone o repositório. Dentro da pasta root do projeto, caso você tenha o gerenciandor de versão nvm, use `nvm use`. Seu computador irá usar a versão 20.11.0 do node, que é a versão recomendada pra rodar o projeto.
Caso você não tenha o nvm instalado em seu computador, instale a versão 20.11.0.
Inicie o [backend](https://github.com/nathborges/easy-transfer-backend) em sua máquina. E se certifique que o arquivo .env dentro do frontend está apontando devidamente para a url do backend iniciado.
Após se certificar de estar rodando o node certo para o projeto, use `npm i && npm run dev`. O EasyTransferFrontend, como default, estará rodando no http://localhost:5173/

## Tecnologias usadas

---

 <div style="display:flex">
 <a>
   <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" alt="Vue.js"/>
  </a>
 <a><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript"/></a>
   <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
   <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/>
  </a>
   <a><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"/></a>

</div>


## Descrição dos dados

Todos dados do usuário, como número de conta, cpf, nome, são salvados no localStorage dentro do webBrowser. Sei que não é uma boa prática, até por estar salvando dados sensíveis do usuário, mas foi a forma que achei rápida de conseguir salvar o usuário que está logado. Pretendo melhorar isso.

## Próximos passos
- Testes unitários.
- Criar um sistema de login seguro para o usuário.
- Mostrar o status da transferência.
- Logs de erro para o usuário entender quando houver erro na transferência ou na criação de conta, por exemplo.
- Tirar os dados do localStorage.
