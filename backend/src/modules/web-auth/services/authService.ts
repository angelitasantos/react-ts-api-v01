import { AppError } from '../../../utils/AppError'
import { comparePassword } from '../../../utils/hash'
import { generateToken } from '../../../utils/jwt'
import { AuthModel } from '../models/authModel'
import { LoginDTO } from '../types/authTypes'
import { 
  INACTIVE_USER, 
  INVALID_EMAIL_OR_PASSWORD 
} from '../../../constants/index'

export class AuthService {
  constructor(private readonly authModel: AuthModel) {}

  async login(payload: LoginDTO) {
    const user = await this.authModel.findByEmail(payload.email)

    if (!user) {
      throw new AppError(INVALID_EMAIL_OR_PASSWORD, 401)
    }

    if (!user.is_active) {
      throw new AppError(INACTIVE_USER, 403)
    }

    const passwordIsValid = await comparePassword(payload.password, user.password)

    if (!passwordIsValid) {
      throw new AppError(INVALID_EMAIL_OR_PASSWORD, 401)
    }

    const token = generateToken({
      id: user.id,
      email: user.email,
      role_name: user.role_name,
    })

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role_name: user.role_name,
      },
    }
  }
}