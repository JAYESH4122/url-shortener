export interface LinkPart {
  text: string;
  url: string;
  title?: string;
}

export interface ParagraphWithLinks {
  beforeLink?: string;
  link?: LinkPart;
  afterLink?: string;
  parts?: Array<{
    text: string;
    isLink?: boolean;
    url?: string;
    title?: string;
  }>;
}

export interface BodySectionContent {
  title1: string;
  paragraph1: ParagraphWithLinks;
  title2: string;
  paragraph2: string;
  paragraph3: ParagraphWithLinks;
}

export interface SubscriptionContent {
  title: string;
  subtitle: string;
  cta: LinkPart;
  priceText: ParagraphWithLinks;
}

export interface HeaderBelowContent {
  title: string;
  mainText: ParagraphWithLinks;
  inputPlaceholder: string;
  termsText: ParagraphWithLinks;
  subscription: SubscriptionContent;
}

export interface AppImages {
  phoneImage: string;
}

export interface AppData {
  bodySection: {
    content: BodySectionContent;
    images: AppImages;
  };
  headerBelow: HeaderBelowContent;
  testimonialSection: TestimonialSectionContent;
}

export interface RatingItem {
  stars: number;
  hasHalfStar?: boolean;
  score: string;
  platform: string;
}

export interface CountItem {
  number: string;
  description: string;
}

export interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface TestimonialSectionContent {
  title: string;
  ratings: RatingItem[];
  counts: CountItem[];
  logos: LogoItem[];
}
