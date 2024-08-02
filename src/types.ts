export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}
export interface LinksUteisItem {
  name: string;
  url: string;
  thumbnail_url: string;
  description: string;
  tags?: Array<string>;
}

export interface Dados{
  participantes: string,
  tweets: string,
  curtidas: string,
  comentarios: string,
  visualizacoes: string,
}

export interface BeneficiosItem {
  description: string;
  icon: string;
}

export interface Social {
  favicon: string;
  social_url: string;
}

export interface RankingItem {
  index: number;
  github_username: string;
  name: string;
  started_at: string;
  ended_at: string;
  stack: string[];
  looking_for_job: boolean;
  socials: Social[];
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface ShowcaseSite {
  title: string;
  image: ImageMetadata;
  url: string;
}
