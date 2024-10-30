<!-- frontend/src/components/UserMatching.vue -->
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center">Find a Match</h1>
      <input
        v-model="skill"
        type="text"
        placeholder="Enter skill to find matches"
        class="block w-full border-gray-300 rounded-md shadow-sm mb-4 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        @click="findMatches"
        class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Find Matches
      </button>
      <div v-if="matches.length" class="mt-4">
        <h2 class="text-lg font-semibold">Matched Users:</h2>
        <ul class="mt-2">
          <li v-for="user in matches" :key="user.id" class="border-b py-2">
            {{ user.username }}
          </li>
        </ul>
      </div>
      <div v-if="message" class="mt-4 text-center text-red-500">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      skill: "",
      matches: [],
      message: "",
    };
  },
  methods: {
    async findMatches() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/matching/match?skill=${this.skill}`
        );
        this.matches = response.data;
        if (this.matches.length === 0) {
          this.message = "No matches found";
        } else {
          this.message = "";
        }
      } catch (error) {
        this.message = "Error fetching matches: " + error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
/* Additional component-specific styles can go here */
</style>
