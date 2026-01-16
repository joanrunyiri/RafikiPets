<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useAppData } from '@/stores/mockup'
import { authClient } from '@/utils/auth/auth-client'
import { useRouter } from 'vue-router'
const router = useRouter()

const appData = useAppData()
const session = authClient.useSession()
const handleSignOut = async () => {
  try {
    await authClient.signOut()
    router.push('/login')
  } catch (err) {
    console.error('Sign out failed', err)
  }
}
</script>

<template>
  <v-system-bar :height="60" :ripple="false" color="primary">
    <v-btn
      :href="`tel:${appData.contact.phone.value}`"
      :ripple="false"
      class="mx-2 text-white"
      height="60px"
      variant="text"
      tile
    >
      <!-- <v-icon :icon="appData.contact.phone.icon" :left="mdAndUp" class="mr-2" /> -->
      <span class="hidden-sm-and-down" v-text="appData.contact.phone.value" />
    </v-btn>

    <v-btn
      :href="`mailto:${appData.contact.email.value}`"
      :ripple="false"
      class="mx-2 text-white"
      height="60px"
      variant="text"
      tile
    >
      <!-- <v-icon :icon="appData.contact.email.icon" :left="mdAndUp" class="mr-2" /> -->
      <span class="hidden-sm-and-down" v-text="appData.contact.email.value" />
    </v-btn>
    <v-spacer />
    <v-btn
      :href="`mailto:${appData.contact.email.value}`"
      :ripple="false"
      class="mx-2 text-white"
      height="60px"
      variant="text"
      tile
    >
      <!-- <v-icon :icon="appData.contact.email.icon" :left="mdAndUp" class="mr-2" /> -->
      <span
        class="hidden-sm-and-down"
        v-text="`${appData.authDetails.greeting.value}, ${session.data?.user.name}!`"
      />
    </v-btn>
    <div>
      <v-btn v-if="session.data" @click="handleSignOut">Sign out</v-btn>
    </div>
  </v-system-bar>
</template>
