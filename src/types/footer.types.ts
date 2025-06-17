import type { ElementType } from "react";

export interface NewsLetter {
  title: string;
  subtitle: string;
  emailPlaceholder: string;
  buttonText: string;
}

export type FooterLink = {
  text: string;
  href: string;
};

export type MobileAppLink = {
  platform: string;
  text: string;
  icon: ElementType;
  href: string;
};

export type SocialLink = {
  icon: ElementType;
  href: string;
  label: string;
};

export type FooterData = {
  newsletter: {
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    buttonText: string;
  };

  contact: {
    title: string;
    phone: {
      label: string;
      number: string;
    };
    support: {
      label: string;
      email: string;
    };
  };

  company: {
    title: string;
    links: FooterLink[];
  };

  support: {
    title: string;
    links: FooterLink[];
  };

  services: {
    title: string;
    links: FooterLink[];
  };

  mobile: {
    title: string;
    apps: MobileAppLink[];
  };

  vendorLinks: FooterLink[];

  footer: {
    copyright: string;
    legalLinks: FooterLink[];
    language: string;
    currency: string;
    socialLinks: SocialLink[];
  };
};
