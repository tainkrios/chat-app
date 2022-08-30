import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule(
    'https://www.unpkg.com/css-houdini-squircle@0.1.3/squircle.min.js'
  )
}