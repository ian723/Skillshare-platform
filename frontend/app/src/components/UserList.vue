<!-- frontend/src/components/UserList.vue -->
<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <h1 class="text-2xl font-bold mb-6">Users and Their Skills</h1>
    <ul class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <li v-for="user in users" :key="user.id" class="border-b py-2">
        <h2 class="font-bold">{{ user.username }}</h2>
        <p>Skills: {{ user.skills.join(", ") }}</p>
        <p>Contact: {{ user.contactInfo }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3000/api/users/all");
      this.users = response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  },
};
</script>
