export interface AboutValueItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface AboutContent {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  imageUrl?: string;
  valuesTitle: string;
  values: AboutValueItem[];
  missionTitle: string;
  missionDescription: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}