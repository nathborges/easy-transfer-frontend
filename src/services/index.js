import axios from './axios/axios'

export default {
  async createAccount(payload) {
    return axios.post('/account', payload)
  },
  async depositAmount(payload) {
    return axios.put('/account/deposit', payload)
  },
  async getByCpf(payload) {
    return axios.get(`/account/cpf/${payload}`)
  },
  async getAllTransfers() {
    return axios.get(`/transfer`)
  },
  async scheduleTransfer(payload) {
    return axios.post(`/transfer`, payload)
  },
  async getAllAccounts() {
    return axios.get(`/account`)
  }
}
