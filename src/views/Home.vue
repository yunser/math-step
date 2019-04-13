<template>
    <my-page title="首页" :page="page">
        <ui-text-field v-model="exp" label="表达式" />
        <br>
        <ui-raised-button class="btn" primary label="计算" @click="calculate" />
        <div>
            <h2 class="title">答案</h2>
            <div class="exp">{{ exp2 }}</div>
            <result-list2 :list="results"></result-list2>

            <h2 class="title">解析</h2>
            <result-list :list="results"></result-list>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const mathsteps = require('mathsteps')

    export default {
        data () {
            return {
                exp: '2x + 2x + x + x',
                exp2: '2x + 2x + x + x',
                results: [],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com/?utm_source=mathstep',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        },
        mounted() {
            this.calculate()
        },
        methods: {
            calculate() {
                this.exp2 = this.exp
                const steps = mathsteps.simplifyExpression(this.exp)
                console.log(steps)
                
                this.results = steps

                steps.forEach(step => {
                    console.log("before change: " + step.oldNode.toString());   // before change: 2 x + 2 x + x + x
                    console.log("change: " + step.changeType);                  // change: ADD_POLYNOMIAL_TERMS
                    console.log("after change: " + step.newNode.toString());    // after change: 6 x
                    console.log("# of substeps: ", step.substeps);      // # of substeps: 3
                });
            },
            changeType(value) {
                let map = {
                    'ADD_POLYNOMIAL_TERMS': '多项式项相加',
                    'SIMPLIFY_ARITHMETIC': '简化算法',
                }
                console.log('map[value]', map[value])
                if (map[value]) {
                    return map[value]
                }
                return value
            }
        },
        filters: {
        }
    }
</script>

<style lang="scss" scoped>
.btn {
    margin-bottom: 16px;
}
.title {
    margin: 16px 0;
    font-size: 24px;
}
.exp {
    padding-left: 12px;
}
</style>
