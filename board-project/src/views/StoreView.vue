<template>
    <div>
        <form>
            <label>
                제품 ID :
                <input type="text" v-model="productInfo.product_id">
            </label>
            <br>
            <label>
                제품명 :
                <input type="text" v-model="productInfo.product_name">
            </label>
            <br>
            <label>
                카테고리 :
                <input type="radio" value="A" v-model="productInfo.category">A
                <input type="radio" value="B" v-model="productInfo.category">B
            </label>
            <br>
            <button type="button" @click="addCart">추가</button>
        </form>
        <table>
            <thead>
                <caption>total : {{ total }}</caption>
                <tr>
                    <th>카테고리</th>
                    <th>제품 ID</th>
                    <th>제품명</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(info, idx) in productList">
                    <td>{{ info.category }}</td>
                    <td>{{ info.product_id }}</td>
                    <td>{{ info.product_name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productInfo: {
                product_id: '',
                product_name: '',
                category: 'A'
            }
        }
    },
    computed: {
        productList() {
            return this.$store.state.cart;
        },
        total() {
            return this.$store.getters.cartCount;
        }
    },
    methods: {
        addCart() {
            let obj = {
                product_id : this.productInfo.product_id,
                product_name : this.productInfo.product_name,
                category : this.productInfo.category
            }
            // commit : mutations에서 검색, 매개변수는 함수의 두번째 매개변수에 적용
            // *값이 아닌 참조값을 전달하여 Vuex 기능이 아님
            // this.$store.commit('addProduct', this.productInfo);
            this.$store.commit('addProduct', obj);
            // this.$store.commit('increment');

            // dispatch : actions에서 검색
            this.$store.dispatch('addProduct', obj);
        }
    }
}
</script>

<style scoped>
    table, th, td {
        border: 1px solid;
    }
</style>