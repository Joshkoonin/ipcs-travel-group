export interface Brand {
  id: 'pizazz' | 'ourtribe' | 'geopolitical';
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  accentColor: string;
  secondaryColor: string;
  features: string[];
}

export interface Segment {
  id: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  detailImage?: string;
  details: string[];
}

export interface SubItinerary {
  id: string;
  title: string;
  description: string;
  externalLink?: string;
  schedule: {
    day: string;
    activity: string;
    description?: string;
  }[];
}

export interface Itinerary {
  id: string;
  title: string;
  label: string;
  description: string;
  heroImage: string;
  detailImage?: string;
  subItineraries: SubItinerary[];
  brandIds?: string[];
}

export interface SiteContent {
  homeHero: {
    title: string;
    subtitle: string;
  };
  about: {
    founderName: string;
    founderBio: string;
    founderImage: string;
    heroImage?: string;
    story: string;
  };
  brands: Brand[];
  segments: Segment[];
  itineraries: Itinerary[];
  testimonials: {
    author: string;
    text: string;
    rating: number;
    source: 'TripAdvisor' | 'Internal';
  }[];
  trustedBy: {
    name: string;
    logo: string;
  }[];
}
