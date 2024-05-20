import service from '../services';
export default {
  methods: {
    async loadUser() {
      if (!localStorage.getItem('cpf')) {
        return;
      }
      const cpf = localStorage.getItem('cpf');
      try {
        const response = await service.getByCpf(cpf);
        this.user = response.data;
        localStorage.setItem('firstName', this.user.firstName);
        localStorage.setItem('accountNumber', this.user.accountNumber);
        localStorage.setItem('balance', this.user.balance);
        this.$router.push('/my-account');
      } catch (error) {
        console.log(error);
      }
    }
  }
};
