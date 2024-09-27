<template>
	<div v-if="user">
		<h1>Halaman Dashboard</h1>
		<h2>Selamat Datang Kembali, {{ user.name.toUpperCase() }}</h2>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import customFetch from "../api/api.js";

const user = ref(null);

const getUser = async () => {
	const { data } = await customFetch.get("/auth/getuser");
	console.log(data);
	user.value = data.user;
};

onMounted(() => {
	getUser();
});
</script>
