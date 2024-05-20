export default {
  methods: {
    async eraseUser() {
      if (!localStorage.getItem('cpf')) {
        return;
      }

      localStorage.removeItem('firstName');
      localStorage.removeItem('accountNumber');
      localStorage.removeItem('cpf');
      localStorage.removeItem('balance');
    }
  }
};
