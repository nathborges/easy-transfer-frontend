<template>
  <div class="create-account flex-column">
    <h1 class="text-center">Preencha com seus dados para acessar seu EasyTransfer</h1>
    <div class="flex-row items">
      <LabelAndInput :label="nameInputLabel" @value="handleInputName" />
      <LabelAndInput
        :label="cpfInputLabel"
        @value="handleInputCpf"
        :maxLength="11"
        :onlyNumbers="true"
        :minLength="11"
      />
    </div>
    <div class="buttons">
      <ActionButton label="Voltar" :action="back" />
      <ActionButton label="Criar uma conta" :action="createAccount" />
    </div>
  </div>
</template>

<script>
import ActionButton from '../components/ActionButton.vue';
import LabelAndInput from '../components/LabelAndInput.vue';
import service from '../services';
import erase from '../mixin/erase';

export default {
  components: {
    ActionButton,
    LabelAndInput
  },
  mixins: [
    erase
  ],
  data() {
    return {
      createAccountLabel: 'Criar uma conta',
      myAccountLabel: 'Acessar minha conta e transferências',
      doTransferLabel: 'Fazer uma nova transferência',
      myTransfersLabel: 'Ver meu histórico',
      nameInputLabel: 'Qual é seu nome?',
      cpfInputLabel: 'Qual é seu CPF?',
      cpf: '',
      name: ''
    };
  },
  mounted() {
    this.eraseUser();
  },
  methods: {
    async createAccount() {
      try {
        await service.createAccount({
          firstName: this.name,
          cpf: this.cpf
        });
        this.$router.push('/my-account');
      } catch (error) {
        console.log(error);
      }
    },
    filterInput(e) {
      e.target.value = e.target.value.replace(/[^0-9]+/g, '');
    },
    handleInputName(input) {
      this.name = input;
    },
    handleInputCpf(input) {
      this.cpf = input;
    },
    back() {
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
.create-account {
  gap: 40px;
}

.items {
  gap: 5vh;
  justify-content: center;
}
</style>
