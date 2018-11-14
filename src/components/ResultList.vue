<template>
    <ul class="list" :class="['level-' + level]">
        <li class="item" v-for="item, index of list">
            <div>第 {{ index + 1 }} 步：{{ changeType(item.changeType) }}，结果：{{ item.newNode.toString() }}</div>
            <div></div>
            <result-list :list="item.substeps" v-if="item.substeps && item.substeps.length" :level="level + 1"></result-list>
        </li>
    </ul>
</template>

<script>
    
    export default {
        data () {
            return {
            }
        },
        props: {
            list: Array,
            level: {
                type: Number,
                default: 1
            }
        },
        mounted() {
        },
        methods: {
            changeType(value) {
                let map = {
                    'ADD_POLYNOMIAL_TERMS': '多项式项相加',
                    'SIMPLIFY_ARITHMETIC': '简化',
                    'ADD_COEFFICIENT_OF_ONE': '添加系数 1',
                    'GROUP_COEFFICIENTS': '合并同类项',
                }
                console.log('map[value]', map[value])
                if (map[value]) {
                    return map[value]
                }
                return value
            }
        },
    }
</script>

<style lang="scss" scoped>
.list {
    padding-left: 32px;
}
</style>
