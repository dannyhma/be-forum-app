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
				<Button
					icon="pi pi-cog"
					severity="secondary"
					rounded
					text
					@click="toggle"
				/>
				<Menu ref="menu" id="config_menu" :model="items" popup />
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

const menu = ref(null);
const toggle = (event) => {
	menu.value.toggle(event);
};

const items = ref([
	{
		label: "Update",
		icon: "pi pi-refresh",
		command: () => {
			const data = props.data;
			console.log(data);
		},
	},
	{
		label: "Delete",
		icon: "pi pi-times",
		command: () => {
			console.log("Delete");
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
