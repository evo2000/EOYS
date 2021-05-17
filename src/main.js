import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
	{path: '/', component: HelloWorld},

	// add more routes here as necessary
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
