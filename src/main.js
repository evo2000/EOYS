import { createApp } from 'vue'
import App from './App.vue'
import splash from './components/splash.vue';
import Project from './components/Project.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
	{path: '/', component: splash},

	{path: '/projects/:projectid', component: Project}

	// add more routes here as necessary
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
