<script setup lang="ts">
import { Head, Link, useForm } from "@inertiajs/vue3";
import GuestLayout from "../../Layouts/GuestLayout.vue";

const form = useForm({ name: "", email: "", password: "", password_confirmation: "" });

function submit() {
  form.post("/register");
}
</script>

<template>
  <GuestLayout>
    <Head title="Register" />
    <h1 class="kit-title">Register</h1>
    <form class="mt-6" @submit.prevent="submit">
      <label class="kit-label" for="name">Name</label>
      <input id="name" v-model="form.name" class="kit-input" autocomplete="name" />
      <p v-if="form.errors.name" class="kit-error">{{ form.errors.name }}</p>
      <div class="kit-field">
        <label class="kit-label" for="email">Email</label>
        <input id="email" v-model="form.email" type="email" class="kit-input" autocomplete="username" />
        <p v-if="form.errors.email" class="kit-error">{{ form.errors.email }}</p>
      </div>
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
        <Link href="/login" class="kit-link">Already registered?</Link>
        <button class="kit-button" :disabled="form.processing">Register</button>
      </div>
    </form>
  </GuestLayout>
</template>
