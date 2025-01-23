<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import { reactive } from 'vue'

defineProps<{
  users: { id: number; fullName: string; email: string; password: string }[]
}>()

const form = reactive<{
  fullName: string | null
  email: string | null
  password: string | null
}>({
  fullName: null,
  email: null,
  password: null,
})

function submit() {
  router.post('/users', form)
}
</script>

<template>
  <AppHead title="Users" description="Liste des utilisateurs" />

  <h1 class="text-3xl text-red-400 my-12">Utilisateurs</h1>

  <form @submit.prevent="submit" class="max-w-md mx-auto mb-8 space-y-4">
    <div class="flex flex-col">
      <label for="fullName" class="mb-1 text-sm font-medium text-gray-700">Nom complet</label>
      <input
        type="text"
        id="fullName"
        v-model="form.fullName"
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
    <div class="flex flex-col">
      <label for="email" class="mb-1 text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
    <div class="flex flex-col">
      <label for="password" class="mb-1 text-sm font-medium text-gray-700">Mot de passe</label>
      <input
        type="password"
        id="password"
        v-model="form.password"
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
    <button
      type="submit"
      class="w-full px-4 py-2 text-white bg-red-400 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
    >
      Créer un compte
    </button>
  </form>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.fullName }} - {{ user.email }}</li>
  </ul>
</template>
