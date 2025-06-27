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
  banner: Banner;
  faqSection: FAQSection;
  footer: footer;
  subfooter: subfooter;
  contactDetails: ContactDetails;
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

export interface Banner {
  title: string;
  subtitle: string;
  btn: string;
}
export interface TestimonialSectionContent {
  title: string;
  ratings: RatingItem[];
  counts: CountItem[];
  logos: LogoItem[];
}
export interface FAQSection {
  title: string;
  imgIcon: string;
  columns: FAQItem[][];
}

export interface FAQItem {
  question: string;
}

export interface footer {
  logo_title: string;
  logo: string;
  columns: ExtraLInks[][];
}

export interface ExtraLInks {
  link_text: string;
}

export interface subfooter {
  content_col: ContentCol[];
  copyright_text: string;
}

export interface ContentCol {
  text: string;
}
export interface ContactDetails {
  description: {
    prefix: string;
    emphasized: {
      text: string;
      break: boolean;
    };
    suffix: string;
  };
  buttons: {
    try: {
      text: string;
      className: string;
    };
    sales: {
      text: string;
      className: string;
    };
  };
}
