import type { ResultSetHeader } from 'mysql2'
import type { Pool } from 'mysql2/promise'

export type ResultSet = ResultSetHeader
export type DB = {
  pool: Pool
  query: Pool['query']
  execute: Pool['execute']
  getConnection: Pool['getConnection']
}
