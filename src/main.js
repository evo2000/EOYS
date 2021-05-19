import { createApp } from 'vue'
import App from './App.vue'
import Splash from './components/splash.vue';
import Project from './components/project.vue';
import ProjectList from './components/project-list.vue';
import PageNotFound from './components/page-not-found.vue';
import {createRouter, createWebHistory} from 'vue-router';

let routes = [
	{path: '/', component: Splash},
	{path: '/projects', component: ProjectList},
	{path: '/projects/:projectid', component: Project},

	// add more routes here as necessary

	// 404 page
	{ path: '/:pathMatch(.*)*', component: PageNotFound },
];

const router = createRouter({
	history: createWebHistory(process.env.NODE_ENV === 'production' ? '/EOYS' : '/'),
	routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
