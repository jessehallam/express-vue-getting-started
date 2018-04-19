// Style sheets

import './styles/main.scss';

// Vue bootstrap

import App from './components/app';
import Vue from 'vue';

new Vue({
    components: { App },
    template: '<App></App>'
}).$mount('#app');

if (module.hot)
    module.hot.accept();