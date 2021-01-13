import faker from 'faker'
import { AddAccountRepository } from '@/data/protocols/db/add-account-repository'
import { LoadAccountByEmailRepository } from '@/data/protocols/db/load-account-by-email-repository'
import { LoadAccountByTokenRepository } from '@/data/protocols/db/load-account-by-token-repository'
import { UpdateAccessTokenRepository } from '@/data/protocols/db/update-access-token-repository'

export class AddAccountRepositorySpy implements AddAccountRepository {
  addAccountParams: AddAccountRepository.Params
  result = true

  async add (accountData: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
    this.addAccountParams = accountData
    return this.result
  }
}

export class LoadAccountByEmailRepositorySpy implements LoadAccountByEmailRepository {
  accountModel = {
    id: faker.random.uuid(),
    name: faker.random.uuid(),
    password: faker.random.uuid()
  }

  email: string

  async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
    this.email = email
    return this.accountModel
  }
}

export class LoadAccountByTokenRepositorySpy implements LoadAccountByTokenRepository {
  accountModel = {
    id: faker.random.uuid()
  }

  token: string
  role: string

  async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
    this.token = token
    this.role = role
    return this.accountModel
  }
}

export class UpdateAccessTokenRepositorySpy implements UpdateAccessTokenRepository {
  id: string
  token: string

  async updateAccessToken (id: string, token: string): Promise<void> {
    this.id = id
    this.token = token
  }
}
