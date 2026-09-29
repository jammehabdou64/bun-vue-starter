<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
</script>

<template>
  <div class="kit">
    <div class="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <Link href="/" class="mb-6 font-serif text-4xl tracking-tight">Javel</Link>
      <div class="kit-card">
        <slot />
      </div>
    </div>
  </div>
</template>
