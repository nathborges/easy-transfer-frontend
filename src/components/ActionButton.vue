<template>
  <div @click.prevent="action" class="button-container">
    <a
      ><p>{{ label }}</p></a
    >
  </div>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    label: "",
    action: "",
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-container {
  border: solid green;
  color: green;
  border-radius: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  max-height: 50px;
  min-width: 100px;
}
</style>
