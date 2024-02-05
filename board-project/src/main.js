import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixin.js'
import store from './store.js'

createApp(App).use(router).use(store).mixin(mixins).mount('#app')
// createApp(App).use(router).mount('#app')

// 프로젝트 구조
// App.vue
// - HomeView
// - AboutView
// - BoardView - HeaderComponent
//             - FooterComponent
//             - BoardList
//             - BoardWrite
//             - BoardReadl

// 확장 프로그램(Vue.js devtools) 설치
