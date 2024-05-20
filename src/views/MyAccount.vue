<template>
  <div class="flex-column my-account">
    <div class="flex-row my-account-infos">
      <div class="flex-column" style="gap: 2vh">
        <h1>{{ myAccountTabLabel }}</h1>
        <div class="my-infos">
          <div>
            <p>Nome</p>
            <h2>{{ this.firstName }}</h2>
          </div>
          <div>
            <p>CPF</p>
            <h2>{{ this.cpf }}</h2>
          </div>
          <div>
            <p>Conta</p>
            <h2>{{ this.accountNumber }}</h2>
          </div>
          <div>
            <p>Saldo</p>
            <h2>R$ {{ this.balance ? this.balance.toFixed(2) : 0.0 }}</h2>
          </div>
        </div>
        <ActionButton label="Depositar valor" :action="openDeposit" />
      </div>
      <div class="flex-column" style="gap: 2vh; max-height: 40vh;">
        <h1>{{ myTransfersTabLabel }}</h1>
        <div class="my-transfers flex-column">
          <div v-for="(transfer, index) in userTransfers">
            <HistoryCard v-bind:key="index" :data="transfer" />
          </div>
        </div>
        <ActionButton label="Nova transferência" :action="openNewTransfer" />
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue';
import HistoryCard from '@/components/HistoryCard.vue';
import service from '@/services';

export default {
  name: 'MyAccount',
  components: {
    ActionButton,
    HistoryCard
  },
  data() {
    return {
      cpfLabel: 'Qual é o CPF inserido no cadastro?',
      loadAccountLabel: 'Carregar',
      myAccountTabLabel: 'Minha conta',
      myTransfersTabLabel: 'Minhas transferências',
      newTransferLabel: 'Nova transferência',
      cpf: '',
      firstName: '',
      balance: '',
      accountNumber: null,
      userTransfers: []
    };
  },
  mounted() {
    if (!localStorage.getItem('accountNumber')) {
      return this.$router.push('/login');
    }

    this.cpf = localStorage.getItem('cpf');
    this.firstName = localStorage.getItem('firstName');
    this.balance = Number(localStorage.getItem('balance'));
    this.accountNumber = localStorage.getItem('accountNumber');
    this.loadTransfers();
  },
  methods: {
    async loadTransfers() {
      try {
        const transferResponse = await service.getAllTransfers();
        this.userTransfers = this.filterAccountTransfers(transferResponse.data.content, this.cpf);
      } catch (error) {
        console.log(error);
      }
    },

    filterAccountTransfers(data, target) {
      if (data.length <= 0) {
        return [];
      }
      return data.filter((each) => {
        if (each.sender.cpf == target || each.recipient.cpf == target) {
          return true;
        }
        return false;
      });
    },
    openNewTransfer() {
      this.$router.push('/new-transfer');
    },
    openDeposit() {
      this.$router.push('/deposit');
    }
  }
};
</script>

<style scoped>
.my-account {
  gap: 5vh;
}

.my-account-search {
  gap: 2vh;
}

input {
  height: 30px;
  font-family: WorkSans;
  text-align: center;
}

.my-infos {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  gap: 10px;
}

.my-account-infos {
  gap: 5vw;
}

.my-transfers {
  gap: 4vh;
  overflow: scroll;
}
</style>
