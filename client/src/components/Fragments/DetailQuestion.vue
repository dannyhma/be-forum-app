<template>
	<div class="grid grid-cols-12 gap-4 px-4">
		<div class="col-span-2 flex justify-center">
			<div class="flex items-center gap-2 text-xl">
				<Button icon="pi pi-thumbs-up-fill" rounded text></Button>
				<span>{{ props.data.countVote }}</span>
			</div>
		</div>
		<div class="col-span-10">
			<div class="card my-4">
				<Panel>
					<template #footer>
						<div class="flex flex-wrap items-center justify-between gap-3">
							<div class="flex items-center gap-2">
								<Avatar
									image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
									size="small"
									shape="circle"
								/>
								<span class="font-bold">Amy Elsner</span>
							</div>
							<i>
								<span class="text-base">
									{{ dateFormat(props.data.createdAt) }}
								</span>
							</i>
						</div>
					</template>
					<h2 class="text-2xl font-medium text-primary">
						{{ props.data.title }}
					</h2>
					<p class="my-3">
						<span v-html="props.data.question"></span>
					</p>
					<Chip :label="props.data.category" />
				</Panel>
			</div>
		</div>
	</div>
</template>

<script setup>
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
