<script setup lang="ts"></script>

<template>
  <AppHead title="Home" description="Application ecommerce" />

  <h1 class="text-3xl text-red-400 my-12">Home</h1>

  <div class="flex flex-col justify-center">
    <Link href="/users" class="underline text-blue-400 underline-offset-4">Utilisateurs</Link>
    <Link href="/produits" class="underline text-blue-400 underline-offset-4">Produits</Link>
  </div>
</template>
