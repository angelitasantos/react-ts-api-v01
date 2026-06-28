import { db } from '../../../database'
import { AboutEntity } from '../types/aboutTypes'

export class AboutModel {
  async findAll(): Promise<AboutEntity[]> {
    return db.all<AboutEntity>(
      `
      SELECT * FROM about
      ORDER BY id DESC
      `,
    )
  }

  async findById(id: number): Promise<AboutEntity | undefined> {
    return db.get<AboutEntity>(
      `
      SELECT * FROM about
      WHERE id = ?
      `,
      [id],
    )
  }

  async findActive(): Promise<AboutEntity | undefined> {
    return db.get<AboutEntity>(
      `
      SELECT * FROM about
      WHERE is_active = 1
      ORDER BY id DESC
      LIMIT 1
      `,
    )
  }

  async deactivateAll(): Promise<void> {
    await db.run(
      `
      UPDATE about
      SET is_active = 0,
          updated_at = CURRENT_TIMESTAMP
      WHERE is_active = 1
      `,
    )
  }

  async create(data: Record<string, unknown>): Promise<AboutEntity | undefined> {
    const result = await db.run(
      `
      INSERT INTO about (
        eyebrow,
        title,
        description,
        image_url,
        values_title,
        values_json,
        mission_title,
        mission_description,
        is_active
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        data.eyebrow,
        data.title,
        data.description,
        data.image_url,
        data.values_title,
        data.values_json,
        data.mission_title,
        data.mission_description,
        data.is_active,
      ],
    )

    return this.findById(result.lastID)
  }

  async update(id: number, data: Record<string, unknown>): Promise<AboutEntity | undefined> {
    const fields = Object.keys(data)

    if (fields.length === 0) {
      return this.findById(id)
    }

    const setClause = fields.map((field) => `${field} = ?`).join(', ')
    const values = fields.map((field) => data[field])

    await db.run(
      `
      UPDATE about
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
      DELETE FROM about
      WHERE id = ?
      `,
      [id],
    )

    return result.changes
  }
}