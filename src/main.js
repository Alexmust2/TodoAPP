import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from '@/directives';

const app = createApp(App)

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.use(store).use(router).mount('#app')
