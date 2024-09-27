import { defineStore } from "pinia";
import { ref } from "vue";
import customFetch from "../api/api.js";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("user", () => {
	const dialog = ref(false);
	const errorMessage = ref(null);
	const errorAlert = ref(false);
	const currentUser = ref(
		localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: null,
	);

	const router = useRouter();

	const LoginUser = async (inputData) => {
		try {
			const { data } = await customFetch.post("/auth/login", {
				email: inputData.email,
				password: inputData.password,
			});
			currentUser.value = data.data;
			localStorage.setItem("user", JSON.stringify(data.data));

			dialog.value = false;
			// console.log(data);

			router.push({ name: "dashboard" });
		} catch (error) {
			errorAlert.value = true;
			errorMessage.value = error.response.data.message;
		}
	};

	const LogoutUser = async () => {
		try {
			localStorage.setItem("user", null);
			currentUser.value = null;
			await customFetch.get("/auth/logout");

			router.push({ name: "home" });
		} catch (error) {
			console.log(error);
		}
	};

	const RegisterUser = async (inputData) => {
		try {
			const { data } = await customFetch.post("/auth/register", {
				name: inputData.name,
				email: inputData.email,
				password: inputData.password,
			});
			currentUser.value = data.data;
			localStorage.setItem("user", JSON.stringify(data.data));

			dialog.value = false;
			// console.log(data);

			router.push({ name: "dashboard" });
		} catch (error) {
			errorAlert.value = true;
			errorMessage.value = error.response.data.message;
		}
	};

	return {
		dialog,
		LoginUser,
		LogoutUser,
		RegisterUser,
		currentUser,
		errorAlert,
		errorMessage,
	};
});
