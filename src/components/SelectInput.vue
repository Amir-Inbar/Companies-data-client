<template>
  <section class="select-input" >
    <select class="company-filter-sector form-input" @change="onSelectOption" v-model="filterBy.option">
      <option :value="selectName" selected disabled>{{ selectName }}</option>
      <option v-for="value in select" :value="value">{{ value }}</option>
    </select>
  </section>
</template>

<script>
export default {
  name: 'select-input',
  emits: ['onSelectOption'],
  props: {
    selectName: String,
    select: Object,
    reset: Boolean,
  },
  data() {
    return {
      filterBy: {
        selectName: this.selectName,
        option: this.selectName,
      },
    }
  },

  methods: {
    onSelectOption() {
      const filterBy = this.filterBy
      this.$emit('onSelectOption', filterBy)
    },
    onResetSelect() {
      this.filterBy = {
        selectName: this.selectName,
        option: this.selectName,
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
