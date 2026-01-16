<script setup lang="ts">
import { useAppData } from '@/stores/mockup'
import { authClient } from '@/utils/auth/auth-client'
import { computed } from 'vue'

import { ref } from 'vue'

import useUser from '@/composables/useUser'
import type { VetDetails } from '@/types/user'

import { useRouter } from 'vue-router'

const session = authClient.useSession()
const router = useRouter()
const appData = useAppData()
const { updateVetDetails } = useUser()
const userRef = computed(() => session.value?.data?.user?.id)
const userId = userRef.value
const vetDetails = ref<VetDetails>({
  license_no: '',
  speciality: '',
  location: '',
  phone: '',
  yoe: '',
  bio: '',
})
async function saveVetDetails() {
  const details = vetDetails.value

  try {
    await updateVetDetails(details, userId || '')
    alert('Vet details updated successfully!')
    router.push('/')
  } catch (error) {
    console.error('Error updating vet details:', error)
    alert('Failed to update vet details. Please try again.')
  }
  await updateVetDetails(details, userId || '')
}
</script>

<template>
  <v-container class="pa-6 fill-height">
    <v-card class="mx-auto pa-6" max-width="900" elevation="4" rounded="lg">
      <v-card-title class="text-h5 font-weight-bold mb-1">
        {{ appData.profileDetails.title.value }}
      </v-card-title>

      <v-card-subtitle class="text-subtitle-1 mb-6">
        {{ appData.profileDetails.subtitle.value }}
      </v-card-subtitle>

      <v-form>
        <v-row dense>
          <!-- License No -->
          <v-col cols="12" md="6">
            <div class="text-subtitle-2 text-medium-emphasis mb-2">
              {{ appData.profileDetails.license_no.label }}
            </div>
            <v-text-field
              v-model="vetDetails.license_no"
              density="compact"
              :placeholder="appData.profileDetails.license_no.placeholder"
              variant="outlined"
              hide-details="auto"
            />
          </v-col>

          <!-- Speciality -->
          <v-col cols="12" md="6">
            <div class="text-subtitle-2 text-medium-emphasis mb-2">
              {{ appData.profileDetails.speciality.label }}
            </div>
            <v-text-field
              v-model="vetDetails.speciality"
              density="compact"
              :placeholder="appData.profileDetails.speciality.placeholder"
              variant="outlined"
              hide-details="auto"
            />
          </v-col>

          <!-- Location -->
          <v-col cols="12" md="6">
            <div class="text-subtitle-2 text-medium-emphasis mb-2">
              {{ appData.profileDetails.location.label }}
            </div>
            <v-text-field
              v-model="vetDetails.location"
              density="compact"
              :placeholder="appData.profileDetails.location.placeholder"
              variant="outlined"
              hide-details="auto"
            />
          </v-col>

          <!-- Phone -->
          <v-col cols="12" md="6">
            <div class="text-subtitle-2 text-medium-emphasis mb-2">
              {{ appData.profileDetails.phone.label }}
            </div>
            <v-text-field
              v-model="vetDetails.phone"
              density="compact"
              :placeholder="appData.profileDetails.phone.placeholder"
              variant="outlined"
              hide-details="auto"
            />
          </v-col>

          <!-- Years of Experience -->
          <v-col cols="12" md="6">
            <div class="text-subtitle-2 text-medium-emphasis mb-2">
              {{ appData.profileDetails.yoe.label }}
            </div>
            <v-text-field
              v-model="vetDetails.yoe"
              density="compact"
              :placeholder="appData.profileDetails.yoe.placeholder"
              variant="outlined"
              hide-details="auto"
            />
          </v-col>

          <!-- Bio -->
          <v-col cols="12">
            <div class="text-subtitle-2 text-medium-emphasis mb-2">
              {{ appData.profileDetails.bio.label }}
            </div>
            <v-textarea
              v-model="vetDetails.bio"
              density="compact"
              :placeholder="appData.profileDetails.bio.placeholder"
              variant="outlined"
              auto-grow
              rows="3"
              hide-details="auto"
            />
          </v-col>
        </v-row>
      </v-form>

      <v-card-actions class="mt-6">
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="flat" @click="saveVetDetails"> Complete Profile </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
