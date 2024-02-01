// npm install : package.json 패키지 정보 설치(node_modules)
// npm run serve : 프로젝트 실행

// 실행순서
// 1. main.js
// 2. import 파일(App.vue, router -> index.js)
// 3. import 파일(views)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')