<template>
	<div>
		<Menubar class="bg-yellow-300" :model="items">
			<template #end>
				<Button
					class="border-yellow-900 bg-yellow-700"
					label="Login"
					icon="pi pi-user"
					@click="dialog = true"
				/>
			</template>
		</Menubar>

		<!-- Dialog -->
		<FormAuthComponent v-model:visible="dialog" />
	</div>
</template>

<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";
import FormAuthComponent from "../Fragments/FormAuthComponent.vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../../stores/authStores.js";

const authStores = useAuthStore();

// state pinia
const { dialog } = storeToRefs(authStores);

const items = ref([
	{
		label: "Home",
		icon: "pi pi-home",
	},
	{
		label: "Features",
		icon: "pi pi-star",
	},
	{
		label: "Projects",
		icon: "pi pi-search",
		items: [
			{
				label: "Components",
				icon: "pi pi-bolt",
			},
			{
				label: "Blocks",
				icon: "pi pi-server",
			},
		],
	},
	{
		label: "Contact",
		icon: "pi pi-envelope",
	},
]);
</script>
