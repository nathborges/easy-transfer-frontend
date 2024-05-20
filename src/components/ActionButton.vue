<template>
  <div @click.prevent="action" class="button-container">
    <a
      ><p>{{ label }}</p></a
    >
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    label: { type: String, default: '' },
    action: { type: Function }
  }
};
</script>

<style scoped>
.button-container {
  border: solid 1px green;
  color: green;
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  max-height: 50px;
  min-width: 100px;
}
</style>
