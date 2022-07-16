<template>
  <section class="company-list flex column flex-wrap gap-1 p-2 full-grow">
    <CompanyPreview
      v-for="company in companies"
      :key="company.id"
      :company="company"
      @click="onChooseCompany(company)"
      @onDeletecompany="onDeletecompany"
    />
  </section>
</template>

<script>
import CompanyPreview from './CompanyPreview.vue'

export default {
  name: 'company-list',
  emits:["onDeletecompany","onChooseCompany"],
  props: {
    companies: Array,
  },
  methods: {
    onDeletecompany(companyId) {
      this.$emit('onDeletecompany', companyId)
    },
    onChooseCompany(company) {
      this.$emit('onChooseCompany', company)
    },
  },
  components: {
    CompanyPreview,
  },
}
</script>
