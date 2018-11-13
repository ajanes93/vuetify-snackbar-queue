import Vue from 'vue'
import Vuetify, {
    VApp,
    VContainer,
    VContent,
    VFlex,
    VLayout,
    VSnackbar
} from 'vuetify/lib'
import {Ripple} from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    components: {
        VApp,
        VContent,
        VContainer,
        VFlex,
        VLayout,
        VSnackbar
    },
    directives: {
        Ripple
    }
})
