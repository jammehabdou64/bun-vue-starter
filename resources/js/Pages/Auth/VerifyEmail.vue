<script setup lang="ts">
import { Head, useForm, usePage } from "@inertiajs/vue3";
import GuestLayout from "../../Layouts/GuestLayout.vue";

const form = useForm({});
const logout = useForm({});
const page = usePage();
</script>

<template>
  <GuestLayout>
    <Head title="Verify email" />
    <h1 class="kit-title">Verify email</h1>
    <p class="kit-muted mt-3">
      Thanks for signing up. Open the verification link before using the dashboard. The log mailer writes that link to the terminal running this app.
    </p>
    <p v-if="(page.props.flash as any)?.type === 'status'" class="kit-status mt-4">{{ (page.props.flash as any).message }}</p>
    <div class="kit-row">
      <button type="button" class="kit-link" @click="logout.post('/logout')">Log out</button>
      <button type="button" class="kit-button" :disabled="form.processing" @click="form.post('/email/verification-notification')">Resend link</button>
    </div>
  </GuestLayout>
</template>
