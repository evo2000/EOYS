import { createApp } from 'vue'
import App from './App.vue'
import splash from './components/splash.vue';
import project from './components/project.vue';
import projectlist from './components/project-list.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
	{path: '/', component: splash},
	{path: '/project-list', component: projectlist},
	{path: '/project/:projectid', component: project},

	// add more routes here as necessary

	// 404 page
	// { path: '/:pathMatch(.*)*', component: PathNotFound },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
