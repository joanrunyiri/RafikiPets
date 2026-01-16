import type { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import { pool } from '../mysql'
import type { DB } from '@/types/db'

async function databasePlugin(app: FastifyInstance) {
  const db: DB = {
    pool,
    query: pool.query.bind(pool),
    execute: pool.execute.bind(pool),
    getConnection: pool.getConnection.bind(pool),
  }

  app.decorate('mysql', db)

  app.addHook('onClose', async () => {
    await pool.end()
  })
}

export default fp(databasePlugin)
