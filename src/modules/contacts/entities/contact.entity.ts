import { randomUUID } from 'node:crypto'

export class Contact {
  readonly id: string
  name: string
  email: string
  phone_number: string
  userId: string

  constructor() {
    this.id = randomUUID()
  }
}
