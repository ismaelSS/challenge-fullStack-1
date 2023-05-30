import { randomUUID } from 'node:crypto'

export class Contact {
  readonly id: string
  name: string
  email: string
  phone_number: string
  created_at: Date
  userId?: string

  constructor() {
    this.id = randomUUID()
  }
}
