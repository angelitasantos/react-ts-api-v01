import { LogLevel } from './LogLevel'

export interface LoggerConfig {
  environment: 'development' | 'production' | 'test'
  level: LogLevel
}