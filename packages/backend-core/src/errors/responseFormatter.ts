import { GENERAL_MESSAGES } from '@project/shared'

export function successResponse<T>(data: T, message?: string) {
  return {
    success: true,
    message: message || GENERAL_MESSAGES.DEFAULT_MESSAGE_SUCCESS,
    data,
  }
}

export function errorResponse(message: string) {
  return {
    success: false,
    message,
  }
}