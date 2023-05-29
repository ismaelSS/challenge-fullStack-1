import { Exclude } from 'class-transformer'
import { randomUUID } from 'node:crypto'

export class User {
  readonly id: string
  name: string
  email: string
  phone_number: string
  created_at: Date

  @Exclude()
  password: string

  constructor() {
    this.id = randomUUID()
  }
}
