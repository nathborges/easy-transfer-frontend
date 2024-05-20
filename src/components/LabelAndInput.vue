<template>
  <div class="flex-row items">
    <div class="flex-row item">
      <h2>{{ label }}</h2>
      <input v-model="input" @input="filterInput" :minlength="minlength" :maxlength="maxLength" :type="isDate? 'date' : ''"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabelAndInput',
  props: {
    label: { type: String, default: '' },
    onlyNumbers: { type: Boolean, default: false },
    maxLength: { type: Number, default: 20 },
    minlength: { type: Number, default: 0 },
    isDate: { type: Boolean, default: false },
  },
  data() {
    return {
      input: ''
    }
  },
  watch: {
    input() {
      this.$emit('value', this.input);
    }
  },
  methods: {
    filterInput(e) {
      if (this.onlyNumbers) {
        e.target.value = e.target.value.replace(/[^0-9]+/g, '')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  gap: 10px;
  align-items: center;
}
</style>
