require('./bootstrap');

window.Vue = require('vue');

import App from './View/App';

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
});
