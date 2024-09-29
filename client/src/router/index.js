import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DahsboardView from "../views/DashboardView.vue";
import DetailQuestionView from "../views/DetailQuestionView.vue";
import { useAuthStore } from "../stores/authStores";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: AboutView,
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: DahsboardView,
			meta: {
				requiredAuth: true,
			},
		},
		{
			path: "/question/:id",
			name: "detail-question",
			component: DetailQuestionView,
			props: true,
		},
	],
});

router.beforeEach(async (to, from) => {
	const authStores = await useAuthStore();
	if (to.meta.requiredAuth && !authStores.currentUser) {
		alert("You must be logged in to access this page");
		return {
			path: "/",
		};
	}
});

export default router;
