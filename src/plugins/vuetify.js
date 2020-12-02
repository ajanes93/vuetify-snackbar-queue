import Vue from 'vue'
import Vuetify, {VApp, VBtn, VCol, VContainer, VContent, VIcon, VLayout, VRow, VSnackbar} from 'vuetify/lib'

export const components = {VApp, VLayout, VContainer, VContent, VRow, VCol, VBtn, VSnackbar, VIcon}

Vue.use(Vuetify, {components})

export const opts = {
    icons: {
        iconfonts: 'md'
    }
}

export default new Vuetify(opts)
