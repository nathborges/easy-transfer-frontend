<template>
  <div class="new-transfer flex-column">
    <h1 class="text-center">{{ titleLabel }}</h1>
    <div class="flex-row items">
      <LabelAndInput :label="amountLabel" @value="handleInputAmount" :onlyNumbers="true"/>
    </div>
    <div class="buttons">
      <ActionButton :label="depositLabel" :action="deposit" />
    </div>
  </div>
</template>

<script>
import load from '@/mixin/load';
import ActionButton from '../components/ActionButton.vue';
import LabelAndInput from '../components/LabelAndInput.vue';
import service from '../services';

export default {
  components: {
    ActionButton,
    LabelAndInput,
  },
  mixins: [load],
  data() {
    return {
      titleLabel: 'Preencha com as informações do depósito',
      depositLabel: 'Depositar em minha conta',
      amountLabel: 'Qual é o valor?',
      amount: '',
      accountNumber: '',
    };
  },
  async mounted() {
    if (!localStorage.getItem("accountNumber")) {
      this.$router.push('/my-account'); 
    }
    this.accountNumber = localStorage.getItem("accountNumber");
  },
  methods: {
    async deposit() {
      try {
        await service.depositAmount({
          value: this.amount,
          accountNumber: this.accountNumber,
        });
        this.loadUser();
      } catch (error) {
        console.log(error);
      }
    },
    handleInputAmount(input) {
      this.amount = Number(input);
    },
  }
};
</script>
<style scoped>
.new-transfer {
  gap: 40px;
}

.items {
  gap: 5vh;
  justify-content: center;
}
</style>
