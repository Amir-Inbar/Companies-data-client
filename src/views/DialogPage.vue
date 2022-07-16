<template>
  <section class="company-modal" v-if="company">
    <div class="dialog--backdrop" v-click-outside="onCloseModal">
      <div class="dialog--details flex column text-center">
        <header class="flex column align-center justify-center">
          <i class="fa-solid fa-xmark" @click="onCloseModal"></i>
          <div>{{ company.name }}</div>
        </header>
        <main class="flex column space-between">
          <div class="flex justify-center">
            <span
              v-for="(content, key, idx) in getMainContent"
              class="flex column"
              :key="idx"
              style="margin-inline-end: 30px"
              ><span class="content-key">{{ key }}</span> {{ content }}</span
            >
          </div>
          <div class="summary">
            <span class="summary--title">Company summary:</span>
            <div class="summary--content">{{ getSummaryContent }}...</div>
          </div>
          <MapLocation :location="company.location.geo" />
          <div class="profile">
            <div class="flex justify-center space-around">
              <a
                v-for="(content, key, idx) of getProfileContent"
                :key="idx"
                :href="'http://' + getProfileContent.url[idx]"
                target="_blank"
                ><i
                  :class="'fa-brands' + ' ' + getProfileContent.className[idx] + ' ' + 'fa-3x'"
                  :style="getProfileContent.color[idx]"
                ></i
              ></a>
              <img
                class="profile--logo"
                :src="`https://logo.uplead.com/${getProfileContent.url[getProfileContent.url.length - 1]}`"
                alt="company website"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import { companyService } from '../services/company.service'
import MapLocation from '../components/MapLocation.vue'

export default {
  name: 'dialog-page',
  data() {
    return {
      company: null,
    }
  },
  methods: {
    onCloseModal() {
      this.company = null
      this.$router.push('/company')
    },
  },
  computed: {
    getMainContent() {
      const { employee_count, founded, industry, ticker, gics_sector } = this.company
      return { employee_count, founded, industry, ticker, gics_sector }
    },
    getProfileContent() {
      const { linkedin_url, facebook_url, website, twitter_url } = this.company
      return {
        url: [linkedin_url, facebook_url, twitter_url, website],
        color: ['#0A66C2', '#4267B2', '#1da1f2'],
        className: ['fa-linkedin', 'fa-facebook-square', 'fa-twitter'],
      }
    },
    getSummaryContent() {
      return this.company.summary.slice(0, 550)
    },
  },
  watch: {
    '$route.params.companyId': {
      async handler(companyId) {
        if (companyId) {
          this.company = await companyService.getById(companyId)
        }
      },
      deep: true,
      immediate: true,
    },
  },
  components: { MapLocation },
}
</script>
