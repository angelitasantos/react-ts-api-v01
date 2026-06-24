import { GENERAL_MESSAGES, SERVER_ERRORS } from '@project/shared'

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
  console.log(`${GENERAL_MESSAGES.RUNNING}Seed Database...`)

  await rolesSeed()
  await permissionsSeed()
  await rolePermissionsSeed()

  await usersSeed()
  await userRolesSeed()

  await homeSeed()
  await aboutSeed()
  await contactSeed()
  await contactFormSeed()

  console.log(`seed: ${GENERAL_MESSAGES.DEFAULT_MESSAGE_SUCCESS}`)
}

if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(SERVER_ERRORS.RUNNING_ERROR, error)
      process.exit(1)
    })
}