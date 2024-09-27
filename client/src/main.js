import { createApp } from "vue";
import App from "./App.vue";

// vue prime
import "./style.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

// vue pinia
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

// app.use(router);
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

// components
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("InputText", InputText);

app.mount("#app");
