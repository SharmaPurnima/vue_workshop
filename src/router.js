import VueRouter from 'vue-router'

import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

const routes = [
	{path: '/', component: HomePage},
	{path: '/details/:id', component: DetailsPage, props: true}
]

export default new VueRouter({
	mode: 'history',
	routes
})