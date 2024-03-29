import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant';


const app=createApp(App)
.use(store).use(router).mount('#app')
Vue.use(Button);