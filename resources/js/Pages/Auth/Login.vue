<script setup lang="ts">
import { Head, Link, useForm, usePage } from "@inertiajs/vue3";
import GuestLayout from "../../Layouts/GuestLayout.vue";

const form = useForm({ email: "", password: "" });
const page = usePage();

function submit() {
  form.post("/login");
}
</script>

<template>
  <GuestLayout>
    <Head title="Log in" />
    <h1 class="kit-title">Log in</h1>
    <p v-if="(page.props.flash as any)?.type === 'status'" class="kit-status mt-4">{{ (page.props.flash as any).message }}</p>
    <form class="mt-6" @submit.prevent="submit">
      <label class="kit-label" for="email">Email</label>
      <input id="email" v-model="form.email" type="email" class="kit-input" autocomplete="username" />
      <p v-if="form.errors.email" class="kit-error">{{ form.errors.email }}</p>
      <div class="kit-field">
        <label class="kit-label" for="password">Password</label>
        <input id="password" v-model="form.password" type="password" class="kit-input" autocomplete="current-password" />
        <p v-if="form.errors.password" class="kit-error">{{ form.errors.password }}</p>
      </div>
      <div class="kit-row">
        <Link href="/forgot-password" class="kit-link">Forgot your password?</Link>
        <button class="kit-button" :disabled="form.processing">Log in</button>
      </div>
    </form>
    <p class="kit-muted mt-6">Need an account? <Link href="/register" class="kit-link">Register</Link></p>
  </GuestLayout>
</template>
