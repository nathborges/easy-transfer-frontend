<template>
  <div class="flex-column card">
    <div class="flex-row items">
      <div class="item">
        <p>Nome</p>
        <h2>{{ data.firstName }}</h2>
        <p>Número da conta</p>
        <h2>{{ data.accountNumber }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailableToTransferCard',
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
