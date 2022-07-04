import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css';
import 'vue-toast-notification/dist/theme-sugar.css'
import VueToast from 'vue-toast-notification'
import "../node_modules/bulma/css/bulma.css"

const app = createApp(App)
app.use(VueToast)
app.use(store)
app.use(router)
app.mount('#app')
