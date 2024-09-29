import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";

// prime vue
import "./style.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";

// prime vue components
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Panel from "primevue/panel";
import Avatar from "primevue/avatar";
import Chip from "primevue/chip";
import Message from "primevue/message";
import Editor from "primevue/editor";
import Select from "primevue/select";
import ProgressSpinner from "primevue/progressspinner";

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

// components
app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Message", Message);
app.component("Panel", Panel);
app.component("Avatar", Avatar);
app.component("Chip", Chip);
app.component("Editor", Editor);
app.component("Select", Select);
app.component("ProgressSpinner", ProgressSpinner);

app.mount("#app");
