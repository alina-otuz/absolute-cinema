<template>
  <div class="text-center py-12">
    <h1 class="text-5xl font-bold mb-4">Welcome to Cinema Booking</h1>
    <p class="text-xl text-gray-400 mb-8">Book your favorite movies today!</p>
    
    <router-link v-if="!authStore.isAuthenticated" to="/login" class="btn btn-primary text-lg px-6 py-3 mr-4">
      Login
    </router-link>
    
    <router-link to="/movies" class="btn btn-secondary text-lg px-6 py-3">
      Browse Movies
    </router-link>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
</script>
