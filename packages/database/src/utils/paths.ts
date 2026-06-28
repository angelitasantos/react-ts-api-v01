import path from 'path'

export const databasePaths = {
  authMigrations: path.resolve(__dirname, '../../migrations/auth'),
  webMigrations: path.resolve(__dirname, '../../migrations/web'),

  authSeeds: path.resolve(__dirname, '../../seeds/auth'),
  webSeeds: path.resolve(__dirname, '../../seeds/web'),
}