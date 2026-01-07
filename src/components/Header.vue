<script setup lang="ts">
import { useAppData } from '@/stores/mockup'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const appData = useAppData()
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
      <v-icon :icon="appData.contact.phone.icon" :left="mdAndUp" class="mr-2" />
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
      <v-icon :icon="appData.contact.email.icon" :left="mdAndUp" class="mr-2" />
      <span class="hidden-sm-and-down" v-text="appData.contact.email.value" />
    </v-btn>
    <v-spacer v-if="mdAndUp" />
    <template v-if="mdAndUp">
      <v-btn
        v-for="site in appData.socialLinks"
        :key="site.name"
        :href="site.link"
        class="mx-2"
        target="_blank"
        variant="text"
        icon
      >
        <v-icon :icon="site.icon" class="mx-0 text-white" />
      </v-btn>
    </template>
  </v-system-bar>
</template>
