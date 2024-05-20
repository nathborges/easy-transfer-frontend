<template>
  <div class="flex-column card">
    <div class="flex-column items">
      <div class="item">
        <div class="item">
          <p>Data</p>
          <h2>{{ data.scheduledAt }}</h2>
        </div>
        <p>Conta remetente</p>
        <h2>{{ data.sender.firstName }} | {{ data.sender.accountNumber }}</h2>
      </div>
      <div class="item">
        <p>Conta destinatária</p>
        <h2>{{ data.recipient.firstName }} | {{ data.recipient.accountNumber }}</h2>
      </div>
    </div>
    <div class="flex-column items">
      <div class="item">
        <p>Valor (taxas inclusas)</p>
        <h2>R$ {{ data.amount ? data.amount.toFixed(2) : 0.0 }}</h2>

        <p>Valor taxas</p>
        <h2>R$ {{ data.tax ? data.tax.toFixed(2) : 0.0 }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: {
    data: { type: Object }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  gap: 10px;
  align-items: center;
}

p {
  text-align: center;
}

h2 {
  text-align: center;
}

.items {
  gap: 10px;
  width: 100%;
}

.item {
  width: 100%;
}
</style>
