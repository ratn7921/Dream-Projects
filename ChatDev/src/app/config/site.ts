export const siteConfig = {
  name: 'AI Media Platform',
  description: 'Generate and share AI-powered media content',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Generate',
      href: '/generate',
    },
    {
      title: 'Explore',
      href: '/explore',
    },
  ],
};

export const colors = {
  goldenYellow: '#FFD700',
  teal: '#008080',
  darkForestGreen: '#234B1E',
  softPurple: '#B19CD9',
  warmOrange: '#FF8C42',
};

export type SiteConfig = typeof siteConfig;
