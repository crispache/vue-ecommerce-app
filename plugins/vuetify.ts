import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import "vuetify/lib/styles/main.sass"
import * as components from 'vuetify/components'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
    })

    nuxtApp.vueApp.use(vuetify)
})