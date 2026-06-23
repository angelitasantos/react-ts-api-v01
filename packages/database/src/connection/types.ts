export interface DatabaseConnection {
  run: (sql: string, params?: unknown[]) => Promise<{ lastID: number; changes: number }>
  get: <T>(sql: string, params?: unknown[]) => Promise<T | undefined>
  all: <T>(sql: string, params?: unknown[]) => Promise<T[]>
  exec: (sql: string) => Promise<void>
  close: () => Promise<void>

  testConnection: () => Promise<void>
}