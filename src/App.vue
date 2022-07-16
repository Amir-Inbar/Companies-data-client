<template>
  <section class="app-container container flex column">
    <AppHeader />
    <RouterView class="full-grow" />
    <AppFooter />
  </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
