import { inject, onMounted } from '@vue/composition-api'
import Vue from '@/js/main.js'

// compositions
import defaultComposition from '@/js/compositions/default'

// component
import LoadingDefault from '@/js/components/LoadingDefault.vue'
import LoadingAjax from '@/js/components/LoadingAjax.vue'
import HelloWorld from '@/js/components/HelloWorld.vue'

new Vue({
    el: '#wrapper',
    delimiters: ['{$', '$}'],
    components: {
        LoadingDefault,
        LoadingAjax,
        HelloWorld,
    },
    setup () {
        const { loadingConfig, isLoading, viewportInfo, globalStyle } = defaultComposition()
        const waitLoading = inject('waitLoading')

        onMounted(() => {
            waitLoading()
        })

        return {
            loadingConfig,
            isLoading,
            viewportInfo,
            globalStyle,
        }
    },
})

if (module.hot) {
    module.hot.accept([
        '@/js/compositions/default.js',
    ])
}
