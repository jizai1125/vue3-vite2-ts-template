import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import registerGlobalComp from './components/registerGlobalComp'

const app = createApp(App)

registerGlobalComp(app)

app.use(router).use(createPinia()).mount('#app')
