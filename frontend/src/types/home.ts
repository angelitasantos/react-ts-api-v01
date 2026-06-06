export interface HomeHighlightItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface HomeContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutCardTitle: string;
  aboutCardDescription: string;
  highlightsTitle: string;
  highlightsDescription: string;
  highlights: HomeHighlightItem[];
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}