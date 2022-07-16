import { company } from '../../data/db.json'
import { storageService } from './async-storage-service'
import { loadFromStorage, saveToStorage } from './util.service'

export const companyService = {
  query,
  getById,
  removeCompany,
  getCompanyLogo,
}
const COMPANIES_KEY = 'companies'
_createCompanies()

async function query() {
  return storageService.query(COMPANIES_KEY)
}

async function getById(companyId) {
  return storageService.get(COMPANIES_KEY, companyId)
}

async function removeCompany(companyId) {
  return storageService.remove(COMPANIES_KEY, companyId)
}

async function getCompanyLogo(companyWeb) {
  return await `https://logo.uplead.com/${companyWeb}`
}

function _createCompanies() {
  let companies = loadFromStorage(COMPANIES_KEY)
  if (!companies || !companies.length) {
    companies = company
    saveToStorage(COMPANIES_KEY, companies)
  }
  return companies
}
