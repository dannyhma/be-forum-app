<template>
	<Dialog
		pt:root:class="!border-1 !bg-transparent"
		pt:mask:class="backdrop-blur-sm"
		class="!bg-slate-100"
	>
		<template #container="{ closeCallback }">
			<form @submit.prevent="handleSubmit">
				<div class="flex max-w-sm flex-col gap-6 rounded-lg px-8 py-8">
					<div class="mx-auto block text-white">
						<h1 class="text-2xl font-bold text-slate-900">Logo</h1>
					</div>
					<AlertMessage
						v-if="authStores.errorAlert"
						:message="authStores.errorMessage"
						class="max-w-full p-2"
					/>
					<div class="inline-flex flex-col gap-2" v-if="!isLogin">
						<label for="name" class="font-medium text-slate-900"
							>Username</label
						>
						<InputText
							id="name"
							type="name"
							v-model="userInput.name"
							class="w-80 rounded-full bg-slate-200 p-3 pl-4 font-normal text-slate-800 focus:border-none focus:outline-none focus:ring-2 focus:ring-teal-300"
						></InputText>
					</div>
					<div class="inline-flex flex-col gap-2">
						<label for="email" class="font-medium text-slate-900">Email</label>
						<InputText
							id="email"
							type="email"
							v-model="userInput.email"
							class="w-80 rounded-full bg-slate-200 p-3 pl-4 font-normal text-slate-800 focus:border-none focus:outline-none focus:ring-2 focus:ring-teal-300"
						></InputText>
					</div>
					<div class="inline-flex flex-col gap-2">
						<label for="password" class="font-medium text-slate-900"
							>Password</label
						>
						<InputText
							id="password"
							type="password"
							v-model="userInput.password"
							class="w-80 rounded-full bg-slate-200 p-3 pl-4 font-normal text-slate-800 focus:border-none focus:outline-none focus:ring-2 focus:ring-teal-300"
						></InputText>
					</div>
					<div class="flex items-center gap-4">
						<Button
							label="Cancel"
							@click="closeCallback"
							text
							class="w-full rounded-full border-2 border-teal-300 !p-3 text-slate-900 hover:border-2 hover:border-teal-400 hover:bg-teal-400 hover:text-white"
						></Button>
						<Button
							:label="isLogin ? 'Login' : 'Register'"
							type="submit"
							text
							class="w-full rounded-full border-2 border-teal-300 !p-3 text-slate-900 hover:border-2 hover:border-teal-400 hover:bg-teal-400 hover:text-white"
						></Button>
					</div>
					<div class="w-full text-slate-800">
						<p v-if="isLogin" class="text-right">
							Don't have account?
							<span
								@click="isLogin = false"
								class="my-2 cursor-pointer font-bold text-blue-500"
								>Register</span
							>
						</p>
						<p v-else class="text-right">
							Have account?
							<span
								@click="isLogin = true"
								class="my-2 cursor-pointer font-bold text-blue-500"
								>Login</span
							>
						</p>
					</div>
				</div>
			</form>
		</template>
	</Dialog>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "../../stores/authStores.js";
import AlertMessage from "../Elements/AlertMessage.vue";

// store
const authStores = useAuthStore();

// action store
const { LoginUser, RegisterUser } = authStores;

// state
const userInput = reactive({
	name: "",
	email: "",
	password: "",
});

const clearInput = () => {
	userInput.name = "";
	userInput.email = "";
	userInput.password = "";
};

const isLogin = ref(true);

const handleSubmit = () => {
	if (isLogin.value === true) {
		LoginUser(userInput);
		clearInput();
	} else {
		RegisterUser(userInput);
		clearInput();
	}
};
</script>
