<template>
	<DetailQuestion v-if="questionData" :data="questionData" />
	<LoadingSpinner v-else />
</template>

<script setup>
import { useRoute } from "vue-router";
import DetailQuestion from "../components/Fragments/DetailQuestion.vue";
import customFetch from "../api/api";
import { ref, onMounted } from "vue";
import LoadingSpinner from "../components/Elements/LoadingSpinner.vue";

const questionData = ref(null);
const route = useRoute();

const detailQuestion = async () => {
	try {
		const { data } = await customFetch.get(`/question/${route.params.id}`);
		questionData.value = data.data;
	} catch (error) {}
};

onMounted(() => {
	detailQuestion();
});
</script>
