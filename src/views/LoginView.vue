<template>
  <div class="flex-column login">
    <LabelAndInput :label="cpfLabel" :maxLength="11" :minlength="11" @value="handleCpf" />
    <ActionButton :label="loadAccountLabel" :action="loadAccount" />
  </div>
</template>

<script>
import ActionButton from '../components/ActionButton.vue';
import LabelAndInput from '../components/LabelAndInput.vue';
import load from '../mixin/load';

export default {
  components: {
    ActionButton,
    LabelAndInput
  },
  mixins: [load],
  data() {
    return {
      cpfLabel: 'Qual é o CPF inserido no cadastro?',
      loadAccountLabel: 'Carregar',
      cpf: '',
      user: {}
    };
  },
  methods: {
    async loadAccount() {
      await this.loadUser();
    },
    handleCpf(input) {
      this.cpf = input;
      localStorage.setItem('cpf', this.cpf);
    }
  }
};
</script>
<style scoped>
.login {
  gap: 2vh;
}
</style>
