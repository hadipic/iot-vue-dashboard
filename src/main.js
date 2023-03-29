import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
//import header from './components/Header.vue'
//import footer from './components/Footer.vue'

//Vue.component('Header', header)
//Vue.component('Footer', footer)
const app = createApp(App)
app.use(router)

app.mount('#app')



