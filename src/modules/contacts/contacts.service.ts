import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'
import { ContactsRepository } from './repositories/contacts.repositories'
@Injectable()
export class ContactsService {
  constructor(private ContactsRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto, userId: string) {
    const contact = await this.ContactsRepository.create(
      createContactDto,
      userId,
    )

    return contact
  }

  async findAll() {
    const contacts = await this.ContactsRepository.findAll()
    return contacts
  }

  async findAllUserContacts(userId: string) {
    const contacts = await this.ContactsRepository.findAllUserContacts(userId)
    return contacts
  }

  async findOne(id: string) {
    const contact = await this.ContactsRepository.findOne(id)
    if (!contact) {
      throw new NotFoundException('Contact not found.')
    }
    return contact
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.ContactsRepository.findOne(id)
    if (!contact) {
      throw new NotFoundException('Contact not found.')
    }

    const updateContact = await this.ContactsRepository.update(
      id,
      updateContactDto,
    )
    return updateContact
  }

  async remove(id: string) {
    const contact = await this.ContactsRepository.findOne(id)
    if (!contact) {
      throw new NotFoundException('Contact not found.')
    }

    await this.ContactsRepository.delete(id)
    return
  }
}
