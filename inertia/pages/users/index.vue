<script setup lang="ts">
defineProps<{
  users: { id: number; name: string }[]
}>()
</script>

<template>
  <AppHead title="Users" description="Liste des utilisateurs" />

  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
