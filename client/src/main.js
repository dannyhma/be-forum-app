import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";

// prime vue
import "./style.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";

// import prime vue components from utils
import primevueComponents from "./utils/primevueComponents";

// pinia
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			cssLayer: {
				name: "primevue",
				order: "tailwind-base, primevue, tailwind-utilities",
			},
		},
	},
});

pinia.use(({ store }) => {
	store.router = markRaw(router);
});

// register prime vue components globally
Object.values(primevueComponents).forEach((component) => {
	app.component(component.name, component);
});

app.mount("#app");
