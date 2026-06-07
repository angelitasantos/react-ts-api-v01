export interface ContactContent {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  infoTitle: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}