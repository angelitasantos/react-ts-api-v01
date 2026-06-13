export interface UserEntity {
  id: number;

  name: string;
  email: string;
  password: string;
  role_name: string;

  is_active: number;
  must_change_password: number;

  last_login_at: string | null;
  password_changed_at: string | null;

  created_at: string;
  updated_at: string;

  created_by: number | null;
  updated_by: number | null;
}

export interface LoginDTO {
  email: string;
  password: string;
}