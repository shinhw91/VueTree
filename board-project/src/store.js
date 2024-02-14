// // store.js

// // 저장소 생성
// import { createStore } from "vuex";
// // 데이터 저장 : npm install vuex-persistedstate
// import createPersistedState from 'vuex-persistedstate';

// export default createStore({
//     state() {
//         return {
//             cart : [
//                 {
//                     product_id : 1,
//                     product_name : '아이폰 거치대',
//                     category : 'A'
//                 }
//             ],
//             count : 0
//         }
//     },
//     // this가 아닌 state 적용
//     getters: {
//         cartCount : (state) => {
//             return state.cart.length;
//         }
//     },
//     mutations: {
//         increment(state) {
//             state.count++;
//         },
//         addProduct(state, info) {
//             state.cart.push(info);
//         }
//     },
//     // mutations 기능 호출(state 불가)
//     actions: {
//         addProduct(context, info) {
//             context.commit('addProduct', info);
//             // 비동기 작업
//             setTimeout(() => {
//                 context.commit('increment');
//             }, 1000);
//             context.commit('increment');
//         }
//     },
//     plugins : [createPersistedState()]
// })