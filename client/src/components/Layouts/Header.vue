<template>
	<div>
		<Menubar class="bg-teal-300 p-4" :model="items">
			<template #end>
				<Button
					class="border-transparent"
					v-if="!authStores.currentUser"
					label="Login"
					icon="pi pi-user"
					@click="dialog = true"
				/>
				<div v-else>
					<Button class="mr-3 border-transparent" label="Dashboard" />
					<Button
						label="Logout"
						class="border-transparent"
						severity="danger"
						@click="LogoutUser"
					/>
				</div>
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

// action pinia
const { LogoutUser } = authStores;

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
