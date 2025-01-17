<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import AppHead from '~/components/AppHead.vue'

defineProps<{
  renderCount: number
  refreshCount1: number
  refreshCount2: number
  lazyCount: number
}>()
</script>

<template>
  <AppHead title="Login" description="Login to your account" />

  <div class="flex flex-col space-y-2">
    <h1 class="text-red-500 text-2xl">Login</h1>
    <Link href="/">Don't have an account ? Go back home</Link>
  </div>

  <Button @click="router.reload()">Render Count: {{ renderCount }}</Button>

  <Button as-child>
    <Link href="/login" :only="['refreshCount1']">Refresh Count 1: {{ refreshCount1 }}</Link>
  </Button>

  <Button as-child>
    <Link href="/login" :only="['refreshCount2']">Refresh Count 2: {{ refreshCount2 }}</Link>
  </Button>

  <Button as-child>
    <Link href="/login" :only="['lazyCount']">Lazy Count: {{ lazyCount }}</Link>
  </Button>
</template>
