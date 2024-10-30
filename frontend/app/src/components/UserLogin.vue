<!-- frontend/src/components/UserLogin.vue -->
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">User Login</h1>
      <form @submit.prevent="loginUser">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            v-model="username"
            type="text"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            required
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/users/login",
          {
            username: this.username,
            password: this.password,
          }
        );
        alert(response.data.message); // Successful login
        this.$router.push("/workspace"); // Redirect to workspace after login
      } catch (error) {
        alert("Error logging in: " + error.response.data.error);
      }
    },
  },
};
</script>
