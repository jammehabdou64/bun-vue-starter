<script setup lang="ts">
import { Head, Link, usePage } from "@inertiajs/vue3";

defineProps<{ name?: string }>();
const page = usePage();
</script>

<template>
  <Head :title="`${name ?? 'Javel'} · Vue`" />
  <main class="min-h-screen bg-[#10130f] font-sans text-[#f4f1ea] antialiased">
    <div class="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p class="text-[11px] tracking-[0.32em] text-[#c6f25c] uppercase">Vue</p>
      <h1 class="mt-4 font-serif text-7xl tracking-tight">{{ name ?? "Javel" }}</h1>
      <p class="mt-6 max-w-md text-lg leading-relaxed font-light text-[#b7b1a6]">
        Register, sign in, and open the dashboard. The server owns the routes. This page is an Inertia component.
      </p>
      <div class="mt-8 flex gap-4 text-sm">
        <Link v-if="(page.props.auth as any)?.user?.email" href="/dashboard" class="rounded-full bg-[#c6f25c] px-5 py-2 text-[#10130f]">Dashboard</Link>
        <template v-else>
          <Link href="/login" class="rounded-full bg-[#c6f25c] px-5 py-2 text-[#10130f]">Log in</Link>
          <Link href="/register" class="rounded-full border border-[#f4f1ea]/30 px-5 py-2">Register</Link>
        </template>
      </div>
    </div>
  </main>
</template>
