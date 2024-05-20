# EasyTransfer

## Sobre

O EasyTransfer é um webapp de transferência de valores entre as contas. O seu propósito é ajudar as pessoas se organizarem financeiramente, conseguirem transferir valores entre contas de forma rápida e fácil.

## O que o usuário pode fazer

O usuário pode criar uma conta, depositar um valor em sua conta e transferir livremente para outras contas que existem.

## How to run
Clone the repository and inside project folder, you must run `npm i && npm run serve` on the terminal and access the Hidrosaver, by default, on http://localhost:8080/

Clone o repositório. Dentro da pasta root do projeto, caso você tenha o gerenciandor de versão nvm, use `nvm use`. Seu computador irá usar a versão 20.11.0 do node, que é a versão recomendada pra rodar o projeto.
Caso você não tenha o nvm instalado em seu computador, instale a versão 20.11.0.
Após se certificar de estar rodando o node certo, use `npm i && npm run dev`.

## Tecnologias usadas

### Front-end

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
