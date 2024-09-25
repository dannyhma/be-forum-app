<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const dataMessage = ref({});

const getMessage = async () => {
	try {
		const { data } = await axios.get("http://localhost:3000/");
		dataMessage.value = data;
		console.log(data);
	} catch (error) {
		console.error(error);
	}
};

onMounted(() => getMessage());
</script>

<template>
	<div class="flex justify-center">
		<h1>BE Forum Vue</h1>
		<h2 class="text-6xl">{{ dataMessage.message }}</h2>
	</div>
</template>
