<template>
  <section v-if="companies" class="companies py-2">
    <CompanyFilter @onSelectOption="onSelectOption" />
    <div class="main-content flex gap-5">
      <CompanyList @onDeletecompany="onDeletecompany" @onChooseCompany="onChooseCompany" :companies="companies" />
      <DashboardGraph :companies="companies" :company="selectedCompany" />
    </div>
    <DialogPage />
  </section>
</template>

<script>
import CompanyList from '../components/CompanyList.vue'
import CustomForm from '../components/CustomForm.vue'
import DashboardGraph from '../components/DashboardGraph.vue'
import DialogPage from './DialogPage.vue'
import CompanyFilter from '../components/CompanyFilter.vue'

export default {
  name: 'companyPage',
  created() {
    this.$store.dispatch({ type: 'loadCompanies' })
  },
  data() {
    return {
      selectedCompany: null,
    }
  },
  methods: {
    onDeletecompany(companyId) {
      this.$store.dispatch({ type: 'removeCompany', companyId })
    },
    onChooseCompany(company) {
      this.selectedCompany = company
    },
    onSelectOption(filterBy) {
      this.$store.dispatch({ type: 'setFilter', filterBy })
    },
  },
  computed: {
    companies() {
      return this.$store.getters.companiesToDisplay
    },
  },
  components: {
    CompanyList,
    CustomForm,
    DashboardGraph,
    DialogPage,
    CompanyFilter,
  },
}
</script>
