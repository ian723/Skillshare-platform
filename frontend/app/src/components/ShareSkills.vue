<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold mb-6">Share Your Skills</h1>
    <form @submit.prevent="updateSkills" class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <textarea
        v-model="skills"
        placeholder="Enter your skills (comma-separated)"
        rows="4"
        class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
      <button
        type="submit"
        class="mt-4 w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Share Skills
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      skills: '',
    };
  },
  methods: {
    async updateSkills() {
      // Replace with your method of obtaining the user ID
      const userId = this.$store.state.user.id; // Assuming you use Vuex to manage user state
      const skillsArray = this.skills.split(',').map(skill => skill.trim());

      try {
        await axios.put(`http://localhost:3000/api/users/updateSkills/${userId}`, { skills: skillsArray });
        alert('Skills updated successfully!');
      } catch (error) {
        alert('Error updating skills: ' + (error.response?.data?.error || 'Unknown error'));
      }
    },
  },
};
</script>
