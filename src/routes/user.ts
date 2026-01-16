import type { FastifyInstance } from 'fastify'
import type { VetDetails } from '@/types/user'
import userMgr from '../managers/userMgr'

export default async (app: FastifyInstance) => {
  app.post<{ Body: VetDetails & { userId: string } }>(
    '/api/vet/update-details',
    async (request, response) => {
      const db = app.mysql
      const { license_no, speciality, location, phone, yoe, bio, userId } = request.body
      const { updateVetDetails } = userMgr({ db })
      const result = await updateVetDetails(
        {
          license_no,
          speciality,
          location,
          phone,
          yoe,
          bio,
        },
        userId,
      )
      response.send(result)
    },
  )
}
