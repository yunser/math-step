<template>
    <ul class="list2" :class="['level-' + level]">
        <li class="item" v-for="item, index of list">
            <div v-if="!item.substeps || item.substeps.length === 0">= {{ item.newNode.toString() }}</div>
            <result-list2 :list="item.substeps" v-if="item.substeps && item.substeps.length" :level="level + 1"></result-list2>
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
                    'COLLECT_AND_COMBINE_LIKE_TERMS': '合并同类项',
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
