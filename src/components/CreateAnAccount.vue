<template>
  <div class="main-container">
    <p>Olá!</p>
    <p>Qual é seu nome?</p>
    <Input />
    <p>Qual é seu cpf?</p>
    <Input />
  </div>
</template>

<script>
export default {
  name: "CreateAnAccount",
  data() {
    return {
      accountNotCreated: true,
      createAccountLabel: "Criar uma conta",
      myAccountLabel: "Acessar minha conta e transferências",
      doTransferLabel: "Fazer uma nova transferência",
      myTransfersLabel: "Ver meu histórico",
    };
  },
  methods: {
    createAccountFunction() {
      console.log("oi");
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
