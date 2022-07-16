import { companyService } from '../../services/company.service'

export const companyModule = {
  state() {
    return {
      companies: null,
      filterBy: {},
    }
  },
  getters: {
    companiesToDisplay(state) {
      if (!Object.values(state.filterBy).length) return state.companies
      let filteredCompanies = state.companies
      if (state.filterBy.sector) {
        filteredCompanies = filteredCompanies.filter((company) => {
          if (company.gics_sector === state.filterBy.sector) return company
        })
      }
      if (state.filterBy.location) {
        filteredCompanies = filteredCompanies.filter((company) => {
          if (company.location?.country === state.filterBy.location) return company
        })
      }
      if (state.filterBy.ticker) {
        filteredCompanies = filteredCompanies.filter((company) => {
          if (company.ticker === state.filterBy.ticker) return company
        })
      }
      if (state.filterBy.name && state.filterBy.name !== '') {
        filteredCompanies = filteredCompanies.filter((company) => {
          if (company.name.startsWith(state.filterBy.name)) return company
        })
      }
      return filteredCompanies
    },
    companies(state) {
      return state.companies
    },
    onClearSelect(state) {
      return state.filterBy
    },
  },
  mutations: {
    setCompanies(state, { companies }) {
      state.companies = companies
    },
    removeCompany(state, { companyId }) {
      const idx = state.companies.findIndex((company) => company.id === companyId)
      state.companies.splice(idx, 1)
    },
    setFilter(state, { filterBy }) {
      if (!Object.values(filterBy).length) {
        state.filterBy = {}
        return
      }
      state.filterBy[filterBy.selectName] = filterBy.option
    },
  },
  actions: {
    async loadcompanies({ commit }) {
      const companies = await companyService.query()
      commit({ type: 'setCompanies', companies })
    },
    async removecompany({ commit }, { companyId }) {
      await companyService.removecompany(companyId)
      commit({ type: 'removeCompany', companyId })
    },
    async setFilter({ commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
    },
  },
}
