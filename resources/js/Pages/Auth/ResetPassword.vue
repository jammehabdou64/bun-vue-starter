<script setup lang="ts">
import { Head, useForm } from "@inertiajs/vue3";
import GuestLayout from "../../Layouts/GuestLayout.vue";

const props = defineProps<{ token: string; email: string }>();
const form = useForm({
  token: props.token,
  email: props.email,
  password: "",
  password_confirmation: "",
});

function submit() {
  form.post("/reset-password");
}
</script>

<template>
  <GuestLayout>
    <Head title="Reset password" />
    <h1 class="kit-title">Reset password</h1>
    <form class="mt-6" @submit.prevent="submit">
      <label class="kit-label" for="email">Email</label>
      <input id="email" v-model="form.email" type="email" class="kit-input" />
      <p v-if="form.errors.email" class="kit-error">{{ form.errors.email }}</p>
      <div class="kit-field">
        <label class="kit-label" for="password">Password</label>
        <input id="password" v-model="form.password" type="password" class="kit-input" autocomplete="new-password" />
        <p v-if="form.errors.password" class="kit-error">{{ form.errors.password }}</p>
      </div>
      <div class="kit-field">
        <label class="kit-label" for="password_confirmation">Confirm password</label>
        <input id="password_confirmation" v-model="form.password_confirmation" type="password" class="kit-input" autocomplete="new-password" />
      </div>
      <div class="kit-row">
        <span />
        <button class="kit-button" :disabled="form.processing">Reset password</button>
      </div>
    </form>
  </GuestLayout>
</template>
