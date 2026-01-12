import { betterAuth } from 'better-auth'
import { pool } from '../../../mysql'

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: 'http://localhost:8080',

  emailAndPassword: {
    enabled: true,
  },
  database: pool,
  trustedOrigins: ['http://localhost:5173'],
})
export { pool }
