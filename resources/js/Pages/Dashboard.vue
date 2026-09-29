<script setup lang="ts">
import { Head, usePage } from "@inertiajs/vue3";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout.vue";

const page = usePage();
</script>

<template>
  <AuthenticatedLayout>
    <Head title="Dashboard" />
    <p v-if="(page.props.flash as any)?.type === 'status'" class="kit-status">{{ (page.props.flash as any).message }}</p>
    <div class="kit-card kit-wide">
      <h1 class="kit-title">Dashboard</h1>
      <p class="kit-muted mt-3">You're logged in<span v-if="(page.props.auth as any)?.user?.name"> as {{ (page.props.auth as any).user.name }}</span>.</p>
    </div>
  </AuthenticatedLayout>
</template>
