import type { DB } from '@/types/db'
import type { ResultSet } from '@/types/db'
import type { VetDetails } from '@/types/user'

export default function userMgr({ db }: { db: DB }) {
  async function updateVetDetails(details: VetDetails, userId: string) {
    const [result] = await db.query<ResultSet>(
      `UPDATE user 
        SET license_no = ?, speciality = ?, location = ?, phone = ?, yoe = ?, bio = ?
     WHERE id = ?`,
      [
        details.license_no,
        details.speciality,
        details.location,
        details.phone,
        details.yoe,
        details.bio,
        userId,
      ],
    )
    return result
  }
  return {
    updateVetDetails,
  }
}
