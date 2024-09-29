<template>
	<div>
		<Menubar class="bg-slate-50 p-4 pr-8" :model="items">
			<template #end>
				<Button
					class="rounded-full border-transparent"
					v-if="!authStores.currentUser"
					label="Login"
					icon="pi pi-user"
					@click="dialog = true"
				/>
				<div v-else>
					<Button
						class="mr-3 rounded-full border-transparent"
						icon="pi pi-home"
						label="Dashboard"
						@click="DashboardPath"
					/>
					<Button
						label="Logout"
						class="rounded-full border-transparent"
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
import { useRouter } from "vue-router";

const authStores = useAuthStore();
const router = useRouter();

const DashboardPath = () => {
	router.push({ name: "dashboard" });
};

// action pinia
const { LogoutUser } = authStores;

// state pinia
const { dialog } = storeToRefs(authStores);

const items = ref([
	{
		label: "Home",
		icon: "pi pi-home",
		command: () => {
			router.push({ name: "home" });
		},
	},
	{
		label: "About",
		icon: "pi pi-book",
		command: () => {
			router.push({ name: "about" });
		},
	},
]);
</script>
