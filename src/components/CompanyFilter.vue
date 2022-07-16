<template>
  <section class="company-filter flex wrap gap-3 py-2">
    <SelectInput
      v-for="(select, key, idx) in getSelects"
      :selectName="key"
      :select="select"
      @onSelectOption="onSelectOption"
      :key="idx"
    />
    <CustomForm selectName="name" @onSelectOption="onSelectOption" />
    <button class="btn btn-secondary" @click="onResetSelect">Reset</button>
  </section>
</template>

<script>
import SelectInput from './SelectInput.vue'
import CustomForm from './CustomForm.vue'

export default {
  name: 'company-filter',
  emits: ['onSelectOption'],
  methods: {
    onSelectOption(filterBy) {
      this.$emit('onSelectOption', filterBy)
    },
    onResetSelect() {
      this.$emit('onSelectOption', {})
    },
  },
  computed: {
    getCompanies() {
      return this.$store.getters.companies
    },
    getSelects() {
      const sector = {}
      const location = {}
      const ticker = {}
      this.getCompanies.forEach((company) => {
        if (!sector[company.gics_sector] && company.gics_sector) {
          sector[company.gics_sector] = company.gics_sector
        }
        if (!location[company.location?.country] && company.location?.country) {
          location[company.location.country] = company.location.country
        }
        if (!ticker[company.ticker] && company.ticker) {
          ticker[company.ticker] = company.ticker
        }
      })
      return { sector, location, ticker }
    },
  },
  components: { SelectInput, CustomForm },
}
</script>
