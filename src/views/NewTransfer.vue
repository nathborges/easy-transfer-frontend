<template>
  <div class="new-transfer flex-column">
    <h1 class="text-center">{{ titleLabel }}</h1>
    <div class="flex-row items">
      <LabelAndInput :label="accountNumberLabel" @value="handleInputAccountNumber" />
      <LabelAndInput :label="amountLabel" @value="handleInputAmount" :onlyNumbers="true" />
      <LabelAndInput :label="dateLabel" @value="handleInputDate" isDate="true" />
    </div>
    <div class="buttons">
      <ActionButton :label="transferLabel" :action="transfer" />
    </div>
    <div class="flex-column new-transfer-all-accounts" style="gap: 2vh">
      <h2>{{ availableAccountsLabel }}</h2>
      <div class="all-accounts" v-for="(account, index) in allAccounts">
        <AvailableToTransferCard :data="account" />
      </div>
    </div>
  </div>
</template>

<script>
import load from '@/mixin/load';

import ActionButton from '../components/ActionButton.vue';
import LabelAndInput from '../components/LabelAndInput.vue';
import AvailableToTransferCard from '../components/AvailableToTransferCard.vue';
import service from '../services';

export default {
  components: {
    ActionButton,
    LabelAndInput,
    AvailableToTransferCard
  },
  mixins: [load],
  data() {
    return {
      titleLabel: 'Preencha com as informacões da transferência',
      transferLabel: 'Transferir',
      accountNumberLabel: 'Qual é número da conta destinatária?',
      amountLabel: 'Qual é o valor?',
      dateLabel: 'Qual é a data desejada?',
      availableAccountsLabel: 'Contas disponíveis para transferência',
      amount: '',
      recipientAccountNumber: '',
      senderAccountNumber: '',
      date: '',
      allAccounts: []
    };
  },
  async mounted() {
    if (!localStorage.getItem('accountNumber')) {
      this.$router.push('/my-account');
    }
    this.senderAccountNumber = localStorage.getItem('accountNumber');
    await this.loadAllAccounts();
  },
  methods: {
    async loadAllAccounts() {
      try {
        const response = await service.getAllAccounts();
        if (!response.data.content || response.data.content <= 0) {
          return;
        }

        this.allAccounts = response.data.content.filter((each) => {
          return each.accountNumber != this.senderAccountNumber;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async transfer() {
      try {
        await service.scheduleTransfer({
          amount: this.amount,
          senderAccountNumber: this.senderAccountNumber,
          recipientAccountNumber: this.recipientAccountNumber,
          scheduledDate: this.date
        });
        this.loadUser();
      } catch (error) {
        console.log(error);
      }
    },
    filterInput(e) {
      e.target.value = e.target.value.replace(/[^0-9]+/g, '');
    },
    handleInputAccountNumber(input) {
      this.recipientAccountNumber = input;
    },
    handleInputAmount(input) {
      this.amount = input;
    },
    handleInputDate(input) {
      this.date = input;
    },
    back() {
      this.$router.push('/');
    }
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

.new-transfer-all-accounts {
  overflow: scroll;
  max-height: 20vh;
  padding-right: 1vw ;
  padding-left: 1vw ;
}
</style>
