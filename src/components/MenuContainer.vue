<template>
  <div class="main-container">
    <div v-if="accountNotCreated" class="start">
      <p>Olá!</p>
      <p>Como podemos te ajudar hoje?</p>
      <ActionButton
        :label="createAccountLabel"
        :action="createAccountFunction"
      />
      <t-input variant="error" />
      <ActionButton :label="myAccount" :action="createAccountFunction" />
    </div>
    <div v-if="openAccountCreation" class="account-creation"></div>
    <!-- <div v-else class="create-account">
      <p>Olá!</p>
      <p>Você gostaria de efetuar uma transferência ou ver seu histório?</p>
      <ActionButton
        :label="doTransferLabel"
        :action="createAccountFunction"
      />
      <ActionButton :label="myTransfersLabel" :action="createAccountFunction" />
    </div> -->
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";

export default {
  name: "MenuContainer",
  components: {
    ActionButton,
  },
  data() {
    return {
      accountNotCreated: true,
      openAccountCreation: false,
      createAccountLabel: "Criar uma conta",
      myAccountLabel: "Acessar minha conta e transferências",
      doTransferLabel: "Fazer uma nova transferência",
      myTransfersLabel: "Ver meu histórico",
    };
  },
  methods: {
    createAccountFunction() {
      this.openAccountCreation = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
