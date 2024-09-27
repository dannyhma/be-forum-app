import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import DahsboardView from "../pages/DashboardView.vue";
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
			component: () => import("../pages/AboutView.vue"),
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: DahsboardView,
			meta: {
				requiredAuth: true,
			},
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
