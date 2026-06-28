import { db } from '../../../database'
import { ContactFormEntity } from '../types/contactFormTypes'

export class ContactFormModel {
  async findAll(): Promise<ContactFormEntity[]> {
    return db.all<ContactFormEntity>(
      `
      SELECT * FROM contact_form
      ORDER BY id DESC
      `,
    )
  }

  async findById(id: number): Promise<ContactFormEntity | undefined> {
    return db.get<ContactFormEntity>(
      `
      SELECT * FROM contact_form
      WHERE id = ?
      `,
      [id],
    )
  }

  async create(data: Record<string, unknown>): Promise<ContactFormEntity | undefined> {
    const result = await db.run(
      `
      INSERT INTO contact_form (
        name,
        email,
        subject,
        message
      ) VALUES (?, ?, ?, ?)
      `,
      [
        data.name,
        data.email,
        data.subject,
        data.message,
      ],
    )

    return this.findById(result.lastID)
  }

  async delete(id: number): Promise<number> {
    const result = await db.run(
      `
      DELETE FROM contact_form
      WHERE id = ?
      `,
      [id],
    )

    return result.changes
  }
}