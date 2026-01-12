<script setup lang="ts">
import { ref } from 'vue'
import { useAppData } from '@/stores/mockup'
import imageCatDog from '@/assets/catndog.png'
import { authClient } from '@/utils/auth/auth-client'
import Header from '@/components/Header.vue'
import { useRouter } from 'vue-router'

const appData = useAppData()
const router = useRouter()
const visible = ref(false)
const loading = ref(false)

const fullName = ref('')
const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const isParent = ref(false)
const isVet = ref(false)

const handleSignUp = async () => {
  loading.value = true

  await authClient.signUp.email(
    {
      email: email.value,
      password: password.value,
      name: fullName.value,
      callbackURL: '/home', // redirect after signup
    },
    {
      onRequest: (ctx) => {
        // Show loading state
        loading.value = true
      },
      onSuccess: (ctx) => {
        // User is automatically signed in by default
        router.push('/home')
      },
      onError: (ctx) => {
        loading.value = false
        alert(ctx.error.message)
      },
    },
  )

  loading.value = false
}
const handleLogin = async () => {
  loading.value = true

  await authClient.signIn.email(
    {
      email: email.value,
      password: password.value,
      callbackURL: '/home',
      rememberMe: true,
    },
    {
      onRequest: (ctx) => {
        loading.value = true
      },
      onSuccess: (ctx) => {
        router.push('/')
      },
      onError: (ctx) => {
        loading.value = false
        alert(ctx.error.message)
      },
    },
  )

  loading.value = false
}
</script>
<template>
  <v-app>
    <Header />
    <div v-if="!isSignUp">
      <v-container class="justify-center fill-height">
        <v-card elevation="8" max-width="448" rounded="lg" class="px-8 py-6">
          <div class="text-center mb-6">
            <v-img
              class="mx-auto mb-4"
              max-width="220"
              aspect-ratio="1"
              contain
              :src="imageCatDog"
            />

            <div class="text-h5 font-weight-bold">
              {{ appData.authDetails.title.value }}
            </div>
            <div class="text-medium-emphasis">
              {{ appData.authDetails.description.value }}
            </div>
          </div>

          <div class="text-subtitle-1 text-medium-emphasis mb-1">
            {{ appData.authDetails.email.label }}
          </div>

          <v-text-field
            v-model="email"
            density="compact"
            :placeholder="appData.authDetails.email.placeholder"
            variant="outlined"
          />

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mt-2"
          >
            {{ appData.authDetails.password.label }}
          </div>

          <v-text-field
            v-model="password"
            :append-inner-icon="visible ? 'fas fa-eye' : 'fas fa-eye-slash'"
            :placeholder="appData.authDetails.password.placeholder"
            :type="visible ? 'text' : 'password'"
            density="compact"
            variant="outlined"
            @click:append-inner="visible = !visible"
          />
          <a class="text-caption text-blue text-decoration-none" href="#">
            {{ appData.authDetails.forgot_password.value }}
          </a>
          <v-card color="surface-variant" variant="tonal" class="mb-6">
            <v-card-text class="text-caption text-medium-emphasis">
              Warning: After 3 consecutive failed login attempts, your account will be temporarily
              locked for three hours.
            </v-card-text>
          </v-card>

          <v-btn block size="large" color="primary" variant="tonal" @click="handleLogin">
            {{ appData.authDetails.login.value }}
          </v-btn>

          <v-card-text class="text-center mt-4">
            <a color="primary" v-on:click="isSignUp = true">
              {{ appData.authDetails.no_account.value }} Sign up now
              <v-icon size="16">fas fa-arrow-right</v-icon>
            </a>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <div v-else>
      <v-container class="justify-center fill-height">
        <v-card elevation="8" max-width="448" rounded="lg" class="px-8 py-6">
          <div class="text-center mb-6">
            <v-img
              class="mx-auto mb-4"
              max-width="220"
              aspect-ratio="1"
              contain
              :src="imageCatDog"
            />

            <div class="text-h5 font-weight-bold">
              {{ appData.authDetails.title.value }}
            </div>
            <div class="text-medium-emphasis">
              {{ appData.authDetails.description.value }}
            </div>
          </div>
          <v-chip class="pa-6" @click="isParent = true">
            {{ appData.customerType.paw_parent.value }}
          </v-chip>
          <v-chip class="pa-6 ma-6" @click="isVet = true">
            {{ appData.customerType.veterinarian.value }}
          </v-chip>
          <div class="text-subtitle-1 text-medium-emphasis mb-1">
            {{ appData.authDetails.full_name.label }}
          </div>

          <v-text-field
            v-model="fullName"
            density="compact"
            :placeholder="appData.authDetails.full_name.placeholder"
            variant="outlined"
          />

          <div class="text-subtitle-1 text-medium-emphasis mb-1">
            {{ appData.authDetails.email.label }}
          </div>

          <v-text-field
            v-model="email"
            density="compact"
            :placeholder="appData.authDetails.email.placeholder"
            variant="outlined"
          />

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mt-2"
          >
            {{ appData.authDetails.password.label }}
          </div>

          <v-text-field
            v-model="password"
            :append-inner-icon="visible ? 'fas fa-eye' : 'fas fa-eye-slash'"
            :placeholder="appData.authDetails.password.placeholder"
            :type="visible ? 'text' : 'password'"
            density="compact"
            variant="outlined"
            @click:append-inner="visible = !visible"
          />

          <a class="text-caption text-blue text-decoration-none" href="#">
            {{ appData.authDetails.forgot_password.value }}
          </a>

          <v-card color="surface-variant" variant="tonal" class="mb-6">
            <v-card-text class="text-caption text-medium-emphasis">
              Warning: After 3 consecutive failed login attempts, your account will be temporarily
              locked for three hours.
            </v-card-text>
          </v-card>

          <v-btn
            block
            size="large"
            color="primary"
            variant="tonal"
            @click="handleSignUp"
            :loading="loading"
          >
            {{ appData.authDetails.sign_up.value }}
          </v-btn>

          <v-card-text class="text-center mt-4">
            {{ appData.authDetails.have_account.value }}
            <a color="primary" v-on:click="isSignUp = false">
              {{ appData.authDetails.login.value }}<v-icon size="16">fas fa-arrow-right</v-icon>
            </a>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </v-app>
</template>
<style scoped>
a:hover {
  cursor: pointer;
}
</style>
