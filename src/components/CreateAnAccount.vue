<template>
  <div class="create-account flex-column">
    <p>Preencha com seus dados para acessar seu EasyTransfer</p>
    <div class="flex-row items">
      <div class="flex-row item">
        <p>Qual é seu nome?</p>
        <Input />
      </div>
      <div class="flex-row item">
        <p>Qual é seu CPF?</p>
        <Input @input="filterInput" maxlength="11" />
      </div>
    </div>
    <div class="buttons">
      <ActionButton label="Voltar" :action="openMainMenu" />
      <ActionButton label="Criar uma conta" :action="openMainMenu" />
    </div>
  </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";
export default {
  name: "CreateAnAccount",
  components: {
    ActionButton,
  },
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
    filterKey(e) {
      const key = e.key;

      // If is '.' key, stop it
      if (key === ".") return e.preventDefault();

      // OPTIONAL
      // If is 'e' key, stop it
      if (key === "e") return e.preventDefault();
    },

    // This can also prevent copy + paste invalid character
    filterInput(e) {
      e.target.value = e.target.value.replace(/[^0-9]+/g, "");
    },
  },
};
</script>

<style scoped>
.items {
  gap: 40px;
  padding-bottom: 16px;
}

.item {
  gap: 10px;
}

input {
  height: 30px;
  font-family: WorkSans;
  text-align: center;
}
</style>
