import { defineStore } from "pinia";
import { ref } from "vue";
import customFetch from "../api/api.js";

export const useAuthStore = defineStore("user", () => {
	const dialog = ref(false);
	const errorMessage = ref(null);
	const errorAlert = ref(false);
	const currentUser = ref(
		localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: null,
	);

	const LoginUser = async (inputData) => {
		try {
			const { data } = await customFetch.post("/auth/login", {
				email: inputData.email,
				password: inputData.password,
			});
			currentUser.value = data.data;
			localStorage.setItem("user", JSON.stringify(data.data));
			dialog.value = false;
			console.log(data);
		} catch (error) {
			errorAlert.value = true;
			errorMessage.value = error.response.data.message;
		}
	};

	return { dialog, LoginUser, errorAlert, errorMessage };
});
