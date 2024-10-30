<!-- frontend/src/components/Dashboard.vue -->
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
      <h1 class="text-2xl font-bold mb-6">
        Welcome to the Skill Share Platform!
      </h1>
      <p class="mb-4">Discover skills and learn from others.</p>
      <router-link to="/register" class="text-blue-500">Register</router-link> |
      <router-link to="/login" class="text-blue-500">Login</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
