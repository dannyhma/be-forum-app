<template>
	<div class="card my-4">
		<Panel>
			<template #header>
				<div class="flex items-center gap-2">
					<Avatar
						image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
						size="large"
						shape="circle"
					/>
					<span class="font-bold">Amy Elsner</span>
				</div>
			</template>
			<template #icons>
				<div
					v-if="
						authStore.currentUser &&
						authStore.currentUser._id === props.data.userId
					"
				>
					<Button
						icon="pi pi-cog"
						severity="secondary"
						rounded
						text
						@click="toggle"
					/>
					<Menu ref="menu" id="config_menu" :model="items" popup />
				</div>
			</template>
			<template #footer>
				<div class="flex flex-wrap items-center justify-between gap-3">
					<div class="flex items-center gap-2">
						<Button icon="pi pi-thumbs-up-fill" rounded text></Button>
						<span>{{ props.data.countVote }}</span>
					</div>
					<i>
						<span class="text-sm">{{
							newdateFormat(props.data.createdAt)
						}}</span>
					</i>
				</div>
			</template>
			<RouterLink
				class="text-2xl font-medium text-primary no-underline"
				:to="{ name: 'detail-question', params: { id: props.data._id } }"
			>
				{{ props.data.title }}
			</RouterLink>
			<p class="my-3">
				<span v-html="props.data.question.substring(0, 1000)"></span>
			</p>
			<Dialog
				v-model:visible="dialog"
				modal
				header="Update Question"
				class="w-3/4"
			>
				<FormQuestion
					@close="dialog = false"
					:dataQuestion="dataQuestion"
					:isUpdate="true"
					@reload="reload()"
				/>
			</Dialog>
			<Chip
				:label="props.data.category"
				class="rounded-full text-sm font-bold"
			/>
		</Panel>
	</div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { dateFormat } from "../../utils/dateFormat.js";
import FormQuestion from "./FormQuestion.vue";
import { useAuthStore } from "../../stores/authStores.js";

const menu = ref(null);
const dialog = ref(false);
const dataQuestion = ref(null);
const emit = defineEmits(["reload"]);
const authStore = useAuthStore();
import customFetch from "../../api/api.js";

const reload = () => {
	emit("reload");
};

const toggle = (event) => {
	menu.value.toggle(event);
};

const items = ref([
	{
		label: "Update",
		icon: "pi pi-refresh",
		command: () => {
			const data = props.data;
			dataQuestion.value = data;
			dialog.value = true;
			// console.log(data);
		},
	},
	{
		label: "Delete",
		icon: "pi pi-times",
		command: async () => {
			await customFetch.delete(`question/${props.data._id}`);
			alert("Question deleted");
			emit("reload");
		},
	},
	{
		separator: true,
	},
	{
		label: "Report",
		icon: "pi pi-flag",
		command: () => {
			console.log("Report");
		},
	},
]);

const newdateFormat = (date) => dateFormat(date);

const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
});
</script>
