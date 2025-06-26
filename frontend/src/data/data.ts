import type { AppData } from "./types";

const data: AppData = {
  bodySection: {
    content: {
      title1: "A fast, easy, and free link shortener",
      paragraph1: {
        beforeLink:
          "Use this free URL shortener to change long, ugly links into memorable and trackable short URLs.",
        link: {
          text: "RB.GY",
          url: "",
        },
        afterLink:
          " is the best free link shortener alternative to Bitly, Tinyurl, and Google link shorteners.",
      },
      title2: "Shorten links, then track them",
      paragraph2:
        "Free short links for any social media platform, website, SMS, email, ads, and more. Generate short links for Instagram, LinkedIn, Facebook, X, TikTok and more.",
      paragraph3: {
        parts: [
          {
            text: "Turn short links into QR codes with our ",
          },
          {
            text: "free QR code generator",
            isLink: true,
            url: "/",
          },
          {
            text: ". Shorten a link, then track it to",
          },
          {
            text: "see how many clicks it received",
            isLink: true,
            url: "/",
          },
          {
            text: ".",
          },
        ],
      },
    },
    images: {
      phoneImage: "/caller-image.svg",
    },
  },
  headerBelow: {
    title: "Best Free URL Shortener: Track & Optimize Links",
    mainText: {
      parts: [
        {
          text: "Shorten links for free with ",
        },
        {
          text: "RB.GY",
          isLink: true,
          url: "http://rb.gy",
          title: "http://RB.GY",
        },
        {
          text: " powered by ",
        },
        {
          text: "Rebrandly",
          isLink: true,
          url: "https://rebrandly.com/?__hstc=186252726.4351e665713e42d98d22313d09493705.1750135305462.1750148623678.1750155096237.4&__hssc=186252726.1.1750155096237&__hsfp=197242966",
          title: "URLs shortener | Rebrandly",
        },
        {
          text: ". Create short & memorable links in seconds.",
        },
      ],
    },
    inputPlaceholder: "Enter link here",
    termsText: {
      parts: [
        {
          text: "By clicking Shorten URL, you agree to Rebrandly's ",
        },
        {
          text: "Terms of Use, Privacy Policy",
          isLink: true,
          url: "/",
        },
        {
          text: " and ",
        },
        {
          text: "Cookie Policy",
          isLink: true,
          url: "/",
        },
      ],
    },
    subscription: {
      title: "Shorten, brand, and convert more links!",
      subtitle:
        "Create an account to shorten links, generate QR codes, create a link-in-bio hub, and more.",
      cta: {
        text: "Start for free",
        url: "/",
      },
      priceText: {
        parts: [
          {
            text: "or",
          },
          {
            text: " get analytics for $9/month",
            isLink: true,
            url: "/",
          },
        ],
      },
    },
  },
  testimonialSection: {
    title: "Don't just take our word for it",
    ratings: [
      {
        stars: 5,
        score: "5/5",
        platform: "TrustPilot",
      },
      {
        stars: 4,
        hasHalfStar: true,
        score: "4.6/5",
        platform: "G2Crowd",
      },
      {
        stars: 5,
        score: "5/5",
        platform: "Capterra",
      },
    ],
    counts: [
      {
        number: "2 billion",
        description: "Clicks tracked each month",
      },
      {
        number: "1 billion",
        description: "Branded links created and counting",
      },
      {
        number: "1.3 million",
        description: "Happy customers",
      },
      {
        number: "90,000",
        description: "Developers using our APIs",
      },
    ],
    logos: [
      {
        src: "https://web.archive.org/web/20250621150308/https://dashboard-cdn.rebrandly.com/dashboard-assets/images/logos/logo-customer-saint-gobain.svg",
        alt: "logo",
        width: 115,
        height: 60,
      },
      {
        src: "https://web.archive.org/web/20250621150308/https://dashboard-cdn.rebrandly.com/dashboard-assets/images/logos/logo-customer-samsonite.svg",
        alt: "rebrandly-customer-logo-samsonite",
        width: 115,
        height: 60,
      },
      {
        src: "https://web.archive.org/web/20250621150308/https://dashboard-cdn.rebrandly.com/dashboard-assets/images/logos/logo-customer-toyota.svg",
        alt: "rebrandly-customer-logo-toyota",
        width: 115,
        height: 60,
      },
      {
        src: "https://web.archive.org/web/20250621150308/https://dashboard-cdn.rebrandly.com/dashboard-assets/images/logos/logo-customer-paypal.svg",
        alt: "rebrandly-customer-logo-paypal",
        width: 115,
        height: 60,
      },
      {
        src: "https://web.archive.org/web/20250621150308/https://dashboard-cdn.rebrandly.com/dashboard-assets/images/logos/logo-customer-cisco.svg",
        alt: "rebrandly-customer-logo-cisco",
        width: 115,
        height: 60,
      },
    ],
  },
};
export default data;
