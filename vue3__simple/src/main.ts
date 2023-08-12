import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { Field, Form, ErrorMessage } from 'vee-validate';

const app = createApp(App);
app.use(store).use(router).use(vuetify);

// Register VeeValidate components globally
app.component('VeeField', Field);
app.component('VeeForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');