import vuetify from '../src/plugins/vuetify'

export default previewComponent => {
    // https://vuejs.org/v2/guide/render-function.html
    return {
        vuetify,
        render (createElement) {
            return createElement('v-app', [createElement(previewComponent)])
        }
    }
}
