import axios from 'axios'

export const companyService = {
  query,
  getById,
  addcompany,
  updatecompany,
  removecompany,
  getCompanyLogo,
}

const PORT = 3030
const BASE_URL = process.env.NODE_ENV === 'production' ? `/company` : `http://localhost:${PORT}/company/`

async function query() {
  const { data: company } = await axios.get(BASE_URL)
  return company
}

async function getById(companyId) {
  const { data: company } = await axios.get(BASE_URL + companyId)
  return company
}

async function addcompany(content) {
  const newcompany = {
    content,
    isDone: false,
  }
  const { data: company } = await axios.post(BASE_URL, newcompany)
  return company
}

async function updatecompany(updatedcompany) {
  updatedcompany.isDone = !updatedcompany.isDone
  const { data: company } = await axios.put(BASE_URL + updatedcompany.id, updatedcompany)
  return company
}

async function removecompany(companyId) {
  await axios.delete(BASE_URL + companyId)
}

async function getCompanyLogo(companyWeb) {
  return await `https://logo.uplead.com/${companyWeb}`
}
