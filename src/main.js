import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ElButton, ElSelect } from 'element-plus';

const app = createApp(App)

app.config.globalProperties.$http = 'http/request'
createApp(App)
    .use(store)
    .use(router)
    .use(ElButton)
    .use(ElSelect)
    .mount('#app')
