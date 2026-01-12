import { createAuthClient } from 'better-auth/vue'

export const authClient = createAuthClient({
  baseURL: 'http://localhost:8080', // Backend URL
  basePath: '/api/auth', // Add this to match your backend routes
})

export const { signIn, signUp, useSession } = authClient
