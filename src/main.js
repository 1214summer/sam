import '@/assets/base.css'
import '@/assets/element-plus.css'
import '@/assets/tailwind.css'
import { createApp } from 'vue'
import router from './router'
import { setupStore } from './stores'
import App from './App.vue'

const app = createApp(App)
app.use(router)
setupStore(app)
app.mount('#app')
