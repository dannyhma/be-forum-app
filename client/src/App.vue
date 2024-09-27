<script setup>
import Header from "./components/Layouts/Header.vue";
import customFetch from "./api/api.js";
import { onMounted } from "vue";

const getData = async () => {
	const res = await customFetch.get("test");
	// console.log(res);
};

onMounted(() => {
	getData();
});
</script>

<template>
	<Header />
</template>
