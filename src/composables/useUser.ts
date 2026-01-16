import type { VetDetails } from '@/types/user'

export default function useUser() {
  async function updateVetDetails(details: VetDetails, userId: string) {
    try {
      await fetch('http://localhost:8080/api/vet/update-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...details,
          userId,
        }),
      })
    } catch (error) {
      console.error('Error updating vet details:', error)
    }
  }
  return {
    updateVetDetails,
  }
}
