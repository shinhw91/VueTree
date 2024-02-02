import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// 프로젝트 구조
// App.vue
// - HomeView
// - AboutView
// - BoardView - HeaderComponent
//             - FooterComponent
//             - BoardList
//             - BoardWrite
//             - BoardRead
