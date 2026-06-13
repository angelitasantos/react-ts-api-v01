import { db } from '../../../database/connection'
import { UserEntity } from '../types/authTypes'

export class AuthModel {
  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return db.get<UserEntity>(
      `
      SELECT * FROM users
      WHERE email = ?
      LIMIT 1
      `,
      [email],
    )
  }
}