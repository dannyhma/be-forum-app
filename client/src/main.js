import { createApp } from "vue";
import App from "./App.vue";

// styling
import "./style.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";

// element
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const app = createApp(App);

// app.use(router);
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("InputText", InputText);
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

app.mount("#app");
