export interface StatusResponse {
    success: boolean
    message: string
}

export interface ApiResponse<response> {
  success: boolean
  message: string
  data: response
} 