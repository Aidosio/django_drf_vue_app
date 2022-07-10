import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import a_button from './ui/a-button'
import a_container from './ui/a-container'
import a_input from './ui/a-input'
import a_select from './ui/a-select'
import a_option from './ui/a-option'
import a_title from './ui/a-title'
import a_textarea from './ui/a-textarea'
import a_input_file from './ui/a-input-file'
import a_label from './ui/a-label'
import a_popup from './ui/a-popup'


import router from './route/index'
import Vue2Editor from "vue2-editor";

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

const app = createApp(App)

    app.component('a-button', a_button)
    app.component('a-container', a_container)
    app.component('a-input', a_input)
    app.component('a-select', a_select)
    app.component('a-option', a_option)
    app.component('a-textarea', a_textarea)
    app.component('a-input-file', a_input_file)
    app.component('a-title', a_title)
    app.component('a-label', a_label)
    app.component('a-popup', a_popup)


    app.use(Vue2Editor);
    app.use(router)
    app.mount('#app')
