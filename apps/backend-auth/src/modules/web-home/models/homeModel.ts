import { db } from '../../../database'
import { HomeEntity } from '../types/homeTypes'

export class HomeModel {
  async findAll(): Promise<HomeEntity[]> {
    return db.all<HomeEntity>(
      `
      SELECT * FROM home
      ORDER BY id DESC
      `,
    )
  }

  async findById(id: number): Promise<HomeEntity | undefined> {
    return db.get<HomeEntity>(
      `
      SELECT * FROM home
      WHERE id = ?
      `,
      [id],
    )
  }

  async findActive(): Promise<HomeEntity | undefined> {
    return db.get<HomeEntity>(
      `
      SELECT * FROM home
      WHERE is_active = 1
      ORDER BY id DESC
      LIMIT 1
      `,
    )
  }

  async deactivateAll(): Promise<void> {
    await db.run(
      `
      UPDATE home
      SET is_active = 0,
          updated_at = CURRENT_TIMESTAMP
      WHERE is_active = 1
      `,
    )
  }

  async create(data: Record<string, unknown>): Promise<HomeEntity | undefined> {
    const result = await db.run(
      `
      INSERT INTO home (
        title,
        subtitle,
        description,
        primary_button_text,
        primary_button_link,
        secondary_button_text,
        secondary_button_link,
        image_url,
        about_title,
        about_description,
        about_card_title,
        about_card_description,
        highlights_title,
        highlights_description,
        highlights,
        is_active
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        data.title,
        data.subtitle,
        data.description,
        data.primary_button_text,
        data.primary_button_link,
        data.secondary_button_text,
        data.secondary_button_link,
        data.image_url,
        data.about_title,
        data.about_description,
        data.about_card_title,
        data.about_card_description,
        data.highlights_title,
        data.highlights_description,
        data.highlights,
        data.is_active,
      ],
    )

    return this.findById(result.lastID)
  }

  async update(id: number, data: Record<string, unknown>): Promise<HomeEntity | undefined> {
    const fields = Object.keys(data)

    if (fields.length === 0) {
      return this.findById(id);
    }

    const setClause = fields.map((field) => `${field} = ?`).join(', ')
    const values = fields.map((field) => data[field])

    await db.run(
      `
      UPDATE home
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
      DELETE FROM home
      WHERE id = ?
      `,
      [id],
    )

    return result.changes
  }
}