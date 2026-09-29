<script setup lang="ts">
import { Link, useForm, usePage } from "@inertiajs/vue3";

const page = usePage();
const logout = useForm({});
</script>

<template>
  <div class="kit">
    <header class="kit-nav">
      <Link href="/dashboard" class="font-serif text-2xl">{{ page.props.name ?? "Javel" }}</Link>
      <nav>
        <Link href="/dashboard" class="kit-link">Dashboard</Link>
        <Link href="/profile" class="kit-link">Profile</Link>
        <button type="button" class="kit-link" @click="logout.post('/logout')">Log out</button>
      </nav>
    </header>
    <main class="kit-main">
      <slot />
    </main>
  </div>
</template>
