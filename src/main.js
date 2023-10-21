import './assets/main.css'

import { createApp } from 'vue'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/vs2015.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueHighlightJS)

app.mount('#app')
