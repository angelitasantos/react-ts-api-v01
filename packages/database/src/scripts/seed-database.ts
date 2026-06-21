import { DEFAULT_MESSAGE_SUCCESS, RUNNING, RUNNING_ERROR } from '@project/shared'

import {
  rolesSeed,
  permissionsSeed,
  rolePermissionsSeed,
  usersSeed,
  userRolesSeed,
  homeSeed,
  aboutSeed,
  contactSeed,
  contactFormSeed,
} from '../seeds'

export async function seedDatabase() {
  console.log(`${RUNNING}Seed Database...`)

  await rolesSeed()
  await permissionsSeed()
  await rolePermissionsSeed()

  await usersSeed()
  await userRolesSeed()

  await homeSeed()
  await aboutSeed()
  await contactSeed()
  await contactFormSeed()

  console.log(`seed: ${DEFAULT_MESSAGE_SUCCESS}`)
}

if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(RUNNING_ERROR, error)
      process.exit(1)
    })
}