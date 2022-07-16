<template>
  <div>
    <input
      class="form-input"
      type="text"
      placeholder="Company name..."
      v-model="filterBy.option"
      autocomplete="off"
      @input="onSearchCompany"
    />
  </div>
</template>

<script>
export default {
  name: 'custom-form',
  emits: ['onSelectOption'],
  props: {
    selectName: String,
  },
  data() {
    return {
      filterBy: {
        selectName: this.selectName,
        option: null,
      },
    }
  },
  methods: {
    onSearchCompany() {
      this.$emit('onSelectOption', this.filterBy)
    },
    onResetSelect() {
      this.filterBy = {
        selectName: this.selectName,
        option: null,
      }
    },
  },
  watch: {
    '$store.getters.onClearSelect': {
      handler(filterBy) {
        if (!Object.values(filterBy).length) this.onResetSelect()
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
