import Vue from 'vue'
import Vuetify, {VApp, VBtn, VCol, VContainer, VContent, VIcon, VLayout, VRow, VSnackbar} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {VApp, VLayout, VContainer, VContent, VRow, VCol, VBtn, VSnackbar, VIcon}
})

export default new Vuetify({
    icons: {
        iconfont: 'md'
    }
})
