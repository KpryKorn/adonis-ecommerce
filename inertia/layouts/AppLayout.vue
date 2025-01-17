<script setup lang="ts">
const FULL_YEAR = new Date().getFullYear()
</script>

<template>
  <header class="container">
    <nav class="flex items-center justify-between py-6 md:py-10">
      <div class="flex flex-1 gap-4 font-medium">
        <Link href="/">Men</Link>
        <Link href="/">Women</Link>
        <Link href="/">Kids</Link>
        <Link href="/">New & Featured</Link>
        <Link href="/">Gift</Link>
      </div>

      <div>
        <Link href="/" class="font-heading text-3xl">AdonisMerch</Link>
      </div>

      <div class="flex flex-1 items-center justify-end gap-4 font-medium">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-auto"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" /></svg
        ></span>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-auto"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path
              d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
            /></svg
        ></span>
        <Link href="/login">My Account</Link>
      </div>
    </nav>
  </header>

  <main class="container my-6 md:my-10 grow">
    <slot />
  </main>

  <footer class="container text-sm">
    <div class="flex items-center justify-between py-6">
      <p class="flex flex-1">&copy; {{ FULL_YEAR }} AdonisMerch</p>

      <div class="flex gap-4">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  </footer>
</template>
