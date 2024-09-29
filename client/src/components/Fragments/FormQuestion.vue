<template>
	<form @submit.prevent="handleSubmit">
		<AlertMessage
			v-if="errorAlert"
			:message="errorMessage"
			class="mb-5 mt-1 w-full"
		/>
		<div class="mb-5 flex items-center gap-3">
			<InputText
				v-model="question.title"
				class="flex-auto"
				placeholder="Insert Question Title"
			/>
		</div>
		<div class="mb-10 flex items-center gap-3">
			<Editor
				v-model="question.question"
				editorStyle="height: 300px"
				class="w-full"
				placeholder="Insert Your Question"
			/>
		</div>

		<div class="mb-10 flex items-center gap-3">
			<Select
				v-model="question.category"
				v:model="category"
				:options="categories"
				placeholder="Select a Your Category Question"
				class="w-full"
			/>
		</div>

		<div class="flex justify-end gap-4">
			<Button
				class="rounded-full"
				label="Cancel"
				severity="danger"
				type="button"
				@click="$emit('close')"
			></Button>
			<Button
				class="rounded-full"
				label="Submit"
				serverity="secondary"
				type="submit"
			></Button>
		</div>
	</form>
</template>

<script setup>
import { ref, reactive } from "vue";
import customFetch from "../../api/api";
import AlertMessage from "../Elements/AlertMessage.vue";

const emit = defineEmits(["close"]);

const question = reactive({
	title: "",
	question: "",
	category: "",
});

// state alert
const errorMessage = ref("");
const errorAlert = ref(false);

const clearInput = () => {
	question.title = "";
	question.question = "";
	question.category = "";
};

const handleSubmit = async () => {
	try {
		const newQustion = await customFetch.post("/question", {
			title: question.title,
			question: question.question,
			category: question.category,
		});
		if (newQustion) {
			clearInput();
			emit("close");
			emit("reload");
		}
	} catch (error) {
		errorAlert.value = true;
		errorMessage.value = error.response.data.message;
	}
};

const categories = ref([
	"frontend",
	"backend",
	"mongodb",
	"expressjs",
	"vuejs",
	"nodejs",
	"reactjs",
	"nuxtjs",
]);
</script>
