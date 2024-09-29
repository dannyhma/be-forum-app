<template>
	<Message severity="error" closable>{{ props.message }}</Message>
</template>

<script setup>
const props = defineProps({
	message: {
		type: String,
	},
});
</script>
