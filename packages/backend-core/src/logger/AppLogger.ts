import { LoggerConfig } from './LoggerConfig'
import { LogLevel } from './LogLevel'

export class AppLogger {
  private static config: LoggerConfig = {
    environment: 'development',
    level: LogLevel.INFO,
  }

  static configure(config: LoggerConfig) {
    this.config = config
  }

  private static get isDevelopment(): boolean {
    return this.config.environment === 'development'
  }

  private static canLog(level: LogLevel): boolean {
    const levels: Record<LogLevel, number> = {
      [LogLevel.INFO]: 1,
      [LogLevel.SUCCESS]: 2,
      [LogLevel.WARNING]: 3,
      [LogLevel.ERROR]: 4,
    }

    return levels[level] >= levels[this.config.level]
  }

  private static write(
    level: LogLevel,
    icon: string,
    message: string,
    module?: string,
    data?: unknown,
  ) {
    if (!this.canLog(level)) {
      return
    }

    if (level === LogLevel.INFO && !this.isDevelopment) {
      return
    }

    const timestamp = new Date().toISOString()

    const prefix = module
      ? `[${timestamp}] ${icon} [${level}] [${module}]`
      : `[${timestamp}] ${icon} [${level}]`

    if (data !== undefined) {
      console.log(`${prefix} ${message}`, data)
      return
    }

    console.log(`${prefix} ${message}`)
  }

  static info(message: string, module?: string) {
    this.write(LogLevel.INFO, 'ℹ️', message, module)
  }

  static success(message: string, module?: string) {
    this.write(LogLevel.SUCCESS, '✅', message, module)
  }

  static warning(message: string, module?: string) {
    this.write(LogLevel.WARNING, '⚠️', message, module)
  }

  static error(
    message: string,
    module?: string,
    error?: unknown,
  ) {
    this.write(LogLevel.ERROR, '❌', message, module, error)
  }
}