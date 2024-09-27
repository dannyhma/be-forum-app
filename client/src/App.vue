<template>
	<div>
		<Header />
		<div class="p-5">
			<RouterView />
		</div>
	</div>
</template>

<script setup>
import Header from "./components/Layouts/Header.vue";
</script>
