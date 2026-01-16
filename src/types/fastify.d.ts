import type { DB } from './db'

declare module 'fastify' {
  interface FastifyInstance {
    mysql: DB
  }
}
