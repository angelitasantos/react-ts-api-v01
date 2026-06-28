import { db } from '../../../database'
import { ContactEntity } from '../types/contactTypes'

export class ContactModel {
  async findAll(): Promise<ContactEntity[]> {
    return db.all<ContactEntity>(
      `
      SELECT * FROM contact
      ORDER BY id DESC
      `,
    )
  }

  async findById(id: number): Promise<ContactEntity | undefined> {
    return db.get<ContactEntity>(
      `
      SELECT * FROM contact
      WHERE id = ?
      `,
      [id],
    )
  }

  async findActive(): Promise<ContactEntity | undefined> {
    return db.get<ContactEntity>(
      `
      SELECT * FROM contact
      WHERE is_active = 1
      ORDER BY id DESC
      LIMIT 1
      `,
    )
  }

  async deactivateAll(): Promise<void> {
    await db.run(
      `
      UPDATE contact
      SET is_active = 0,
          updated_at = CURRENT_TIMESTAMP
      WHERE is_active = 1
      `,
    )
  }

  async create(data: Record<string, unknown>): Promise<ContactEntity | undefined> {
    const result = await db.run(
      `
      INSERT INTO contact (
        eyebrow,
        title,
        description,
        info_title,
        email,
        phone,
        address,
        is_active
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        data.eyebrow,
        data.title,
        data.description,
        data.info_title,
        data.email,
        data.phone,
        data.address,
        data.is_active,
      ],
    )

    return this.findById(result.lastID)
  }

  async update(id: number, data: Record<string, unknown>): Promise<ContactEntity | undefined> {
    const fields = Object.keys(data)

    if (fields.length === 0) {
      return this.findById(id)
    }

    const setClause = fields.map((field) => `${field} = ?`).join(', ')
    const values = fields.map((field) => data[field])

    await db.run(
      `
      UPDATE contact
      SET ${setClause}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
      `,
      [...values, id],
    )

    return this.findById(id)
  }

  async delete(id: number): Promise<number> {
    const result = await db.run(
      `
      DELETE FROM contact
      WHERE id = ?
      `,
      [id],
    )

    return result.changes
  }
}