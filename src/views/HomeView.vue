<template>
  <div class="container">
    <div class="start flex-column">
      <h1 class="text-center">Olá! Como podemos te ajudar hoje?</h1>
      <div class="buttons">
        <ActionButton
          :label="createAccountLabel"
          :action="openCreateAccount"
        />
        <ActionButton :label="myAccountLabel" :action="openMyAccount" />
        <ActionButton :label="doTransferLabel" :action="openNewTransfer" />

      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";

export default {
  components: {
    ActionButton,
  },
  data() {
    return {
      createAccountLabel: "Criar uma conta",
      myAccountLabel: "Acessar minha conta",
      doTransferLabel: "Fazer uma nova transferência",
      myTransfersLabel: "Ver meu histórico",
    };
  },
  methods: {
    openCreateAccount() {
      this.$router.push('/create-account');
    },
    openMyAccount() {
      this.$router.push('/my-account');
    },
    openNewTransfer() {
      this.$router.push('/new-transfer');
    },
  },
};
</script>

<style scoped>
.start {
  gap: 5vh;
}

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
