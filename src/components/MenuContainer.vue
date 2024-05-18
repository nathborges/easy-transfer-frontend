<template>
  <div class="container">
    <div class="start">
      <p>Olá! Como podemos te ajudar hoje?</p>
      <div class="buttons">
        <ActionButton
          :label="createAccountLabel"
          :action="openCreateAccount"
        />
        <ActionButton :label="myAccountLabel" :action="openMyAccount" />
      </div>
    </div>
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
      createAccountLabel: "Criar uma conta",
      myAccountLabel: "Acessar minha conta e transferências",
      doTransferLabel: "Fazer uma nova transferência",
      myTransfersLabel: "Ver meu histórico",
    };
  },
  methods: {
    openCreateAccount() {
      this.$emit("openAccountCreationTab");
    },
    openMyAccount() {
      this.$emit("myAccountTab");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
