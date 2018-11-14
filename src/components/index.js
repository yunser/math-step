import page from './page'
import ResultList from './ResultList.vue'
import ResultList2 from './ResultList2.vue'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('result-list', ResultList)
        Vue.component('result-list2', ResultList2)
    }
}
