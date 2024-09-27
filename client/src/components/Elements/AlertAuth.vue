<template>
	<Toast severity="danger" v-show="showError"></Toast>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showError = () => {
	toast.add({
		severity: "error",
		summary: "Error Message",
		detail: "Message Content",
		life: 3000,
	});
};
</script>
