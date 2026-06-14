import { DEFAULT_MESSAGE_SUCCESS } from '../constants/index'

export function successResponse<T>(data: T, message?: string) {
  return {
    success: true,
    message: message || DEFAULT_MESSAGE_SUCCESS,
    data,
  }
}

export function errorResponse(message: string) {
  return {
    success: false,
    message,
  }
}