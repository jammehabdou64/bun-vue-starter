<script setup lang="ts">
import { Head, Link, useForm, usePage } from "@inertiajs/vue3";
import GuestLayout from "../../Layouts/GuestLayout.vue";

const form = useForm({ email: "" });
const page = usePage();

function submit() {
  form.post("/forgot-password");
}
</script>

<template>
  <GuestLayout>
    <Head title="Forgot password" />
    <h1 class="kit-title">Forgot password</h1>
    <p class="kit-muted mt-3">We will email a reset link. With the log mailer, that link is printed in the server log.</p>
    <p v-if="(page.props.flash as any)?.type === 'status'" class="kit-status mt-4">{{ (page.props.flash as any).message }}</p>
    <form class="mt-6" @submit.prevent="submit">
      <label class="kit-label" for="email">Email</label>
      <input id="email" v-model="form.email" type="email" class="kit-input" />
      <p v-if="form.errors.email" class="kit-error">{{ form.errors.email }}</p>
      <div class="kit-row">
        <Link href="/login" class="kit-link">Back to log in</Link>
        <button class="kit-button" :disabled="form.processing">Email reset link</button>
      </div>
    </form>
  </GuestLayout>
</template>
