import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from '@/router'
import "bootstrap/dist/css/bootstrap.min.css"

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Create vue app
const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
// Mount vue app
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js"