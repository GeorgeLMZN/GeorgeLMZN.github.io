import { defineCustomElement } from 'vue'
import App from './ui/App.ce.vue'

const element = defineCustomElement(App);


customElements.define('weather-widget', element);