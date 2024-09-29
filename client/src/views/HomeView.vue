<template>
	<main>
		<div class="grid grid-cols-12 gap-2">
			<aside class="col-span-2">
				<div class="border-rounded-sm bg-teal-50 p-3 text-center font-medium">
					Filter
				</div>
			</aside>
			<section class="col-span-10">
				<div class="border-rounded-sm bg-slate-50 p-3">
					<div
						class="flex items-center justify-between text-3xl font-bold text-primary"
					>
						<h2 class="">List Question</h2>
						<Button
							v-if="authStore.currentUser"
							label="Add"
							icon="pi pi-plus"
							rounded
							type="button"
							@click="dialog = true"
						/>
					</div>
					<Dialog
						v-model:visible="dialog"
						modal
						header="Create Question"
						class="w-3/4"
					>
						<FormQuestion @close="closeDialog()" @reload="allQuestion()" />
					</Dialog>
					<ListQuestion
						v-if="questions"
						v-for="q in questions"
						:key="q.id"
						:data="q"
					/>
					<LoadingSpinner v-else />
				</div>
			</section>
		</div>
	</main>
</template>

<script setup>
import ListQuestion from "../components/Fragments/ListQuestion.vue";
import FormQuestion from "../components/Fragments/FormQuestion.vue";
import { onMounted, ref } from "vue";
import customFetch from "../api/api";
import { useAuthStore } from "../stores/authStores";
import LoadingSpinner from "../components/Elements/LoadingSpinner.vue";

const questions = ref(null);
const dialog = ref(false);
const authStore = useAuthStore();

const allQuestion = async () => {
	try {
		const { data } = await customFetch.get("/question");
		questions.value = data.data;
	} catch (error) {
		console.log(error);
	}
};

const closeDialog = () => {
	dialog.value = false;
};

onMounted(() => {
	allQuestion();
});
</script>
