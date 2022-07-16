import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import './sass/styles.scss'
import { clickOutsideDirective } from './directives'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

const app = createApp(App)
app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_API_KEY,
  },
})

app.use(router)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)

app.directive('click-outside', clickOutsideDirective)

app.config.productionTip = false

app.mount('#app')
