<script setup lang="ts">
defineProps<{ stuff: string }>()
</script>

<template>
  <AppHead title="Home" description="Application ecommerce" />

  <div>
    <h1>Home</h1>
    <p>{{ stuff }}</p>
    <Button>Click me</Button>
    <Link href="/login">Have an account ? Login</Link>
  </div>
</template>
