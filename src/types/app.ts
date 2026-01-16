import type { DB } from '@/types/db'
declare module 'fastify' {
  interface FastifyInstance {
    mysql: DB
  }
}
