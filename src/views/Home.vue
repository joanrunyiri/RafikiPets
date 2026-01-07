<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useAppData } from '@/stores/mockup'
import BackgroundImg from '@/assets/background-light.png'
import CampingImg from '@/assets/paw.svg'

const appData = useAppData()
</script>

<template>
  <v-img :min-height="695" :src="BackgroundImg" cover>
    <v-theme-provider>
      <v-container class="fill-height px-5 py-12">
        <v-responsive class="d-flex align-center justify-center" height="100%" width="99%">
          <v-row align="center">
            <v-col class="text-black" cols="12" md="6">
              <h1 class="mb-10">{{ `${appData.description}?` }}</h1>
              <span class="d-flex mb-10" v-text="appData.subtitle" />
              <VBtn
                class="text-primary font-weight-bold text-none mr-4"
                color="white"
                height="50px"
                href="https://store.vuetifyjs.com/products/flairo-theme-pro"
                target="_blank"
                rounded
              >
                <span class="ms-2" v-text="appData.customerType.paw_parent.value"></span>
                <v-icon class="pa-4" icon="fas fa-paw" />
              </VBtn>
              <VBtn
                class="text-primary font-weight-bold text-none mr-4 mb-1"
                color="white"
                height="50px"
                href="https://store.vuetifyjs.com/products/flairo-theme-pro"
                target="_blank"
                rounded
              >
                <span v-text="appData.customerType.veterinarian.value" />
                <v-icon class="pa-4" icon="fas fa-hospital-user" />
              </VBtn>
            </v-col>
            <v-col cols="12" md="6">
              <v-img :src="CampingImg" max-width="650px" min-height="365px" />
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </v-theme-provider>
  </v-img>
</template>
