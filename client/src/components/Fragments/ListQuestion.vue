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
			<template #footer>
				<div class="flex flex-wrap items-center justify-between gap-3">
					<div class="flex items-center gap-2">
						<Button icon="pi pi-thumbs-up-fill" rounded text></Button>
						<span>{{ props.data.countVote }}</span>
					</div>
					<i>
						<span class="">{{ dateFormat(props.data.createdAt) }}</span>
					</i>
				</div>
			</template>
			<RouterLink class="text-2xl font-medium text-primary no-underline" to="/">
				{{ props.data.title }}
			</RouterLink>
			<p class="my-3">
				<span v-html="props.data.question.substring(0, 250)"></span>
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

const dateFormat = (dataInput) => {
	const newDate = new Date(dataInput).toLocaleString();
	return newDate;
};

const props = defineProps({
	data: {
		type: Object,
		required: true,
	},
});
</script>
