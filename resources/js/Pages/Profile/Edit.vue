<script setup lang="ts">
import { Head, useForm, usePage } from "@inertiajs/vue3";
import AuthenticatedLayout from "../../Layouts/AuthenticatedLayout.vue";

const page = usePage();
const user = (page.props.auth as { user?: { name?: string; email?: string } | null })?.user;
const profile = useForm({ name: user?.name ?? "", email: user?.email ?? "" });
const password = useForm({ current_password: "", password: "", password_confirmation: "" });
const destroy = useForm({ password: "" });

function saveProfile() {
  profile.patch("/profile");
}

function savePassword() {
  password.put("/password", { onSuccess: () => password.reset() });
}

function deleteAccount() {
  destroy.delete("/profile");
}
</script>

<template>
  <AuthenticatedLayout>
    <Head title="Profile" />
    <div class="kit-stack">
      <p v-if="(page.props.flash as any)?.type === 'status'" class="kit-status">{{ (page.props.flash as any).message }}</p>
      <section class="kit-card kit-wide">
        <h1 class="kit-title">Profile</h1>
        <p class="kit-muted mt-2">Update your name and email address.</p>
        <form class="mt-4" @submit.prevent="saveProfile">
          <label class="kit-label" for="name">Name</label>
          <input id="name" v-model="profile.name" class="kit-input" />
          <p v-if="profile.errors.name" class="kit-error">{{ profile.errors.name }}</p>
          <div class="kit-field">
            <label class="kit-label" for="email">Email</label>
            <input id="email" v-model="profile.email" type="email" class="kit-input" />
            <p v-if="profile.errors.email" class="kit-error">{{ profile.errors.email }}</p>
          </div>
          <div class="kit-row"><span /><button class="kit-button" :disabled="profile.processing">Save</button></div>
        </form>
      </section>
      <section class="kit-card kit-wide">
        <h2 class="kit-title">Password</h2>
        <form class="mt-4" @submit.prevent="savePassword">
          <label class="kit-label" for="current_password">Current password</label>
          <input id="current_password" v-model="password.current_password" type="password" class="kit-input" autocomplete="current-password" />
          <p v-if="password.errors.current_password" class="kit-error">{{ password.errors.current_password }}</p>
          <div class="kit-field">
            <label class="kit-label" for="password">New password</label>
            <input id="password" v-model="password.password" type="password" class="kit-input" autocomplete="new-password" />
            <p v-if="password.errors.password" class="kit-error">{{ password.errors.password }}</p>
          </div>
          <div class="kit-field">
            <label class="kit-label" for="password_confirmation">Confirm password</label>
            <input id="password_confirmation" v-model="password.password_confirmation" type="password" class="kit-input" autocomplete="new-password" />
          </div>
          <div class="kit-row"><span /><button class="kit-button" :disabled="password.processing">Update password</button></div>
        </form>
      </section>
      <section class="kit-card kit-wide">
        <h2 class="kit-title">Delete account</h2>
        <p class="kit-muted mt-2">This permanently deletes the account. Enter the current password to confirm.</p>
        <form class="mt-4" @submit.prevent="deleteAccount">
          <label class="kit-label" for="delete_password">Password</label>
          <input id="delete_password" v-model="destroy.password" type="password" class="kit-input" autocomplete="current-password" />
          <p v-if="destroy.errors.password" class="kit-error">{{ destroy.errors.password }}</p>
          <div class="kit-row"><span /><button class="kit-button kit-button-danger" :disabled="destroy.processing">Delete account</button></div>
        </form>
      </section>
    </div>
  </AuthenticatedLayout>
</template>
