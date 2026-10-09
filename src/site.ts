export const SITE = {
  name: 'Toolwise AI',
  tagline: 'Practical AI tools. Honest comparisons. Better work.',
  description:
    'Toolwise AI helps freelancers and small teams choose and use AI tools with clear workflows, honest comparisons and careful fact-checking.',
  // Leave empty until a real, monitored inbox exists. Pages show a neutral notice instead.
  contactEmail: '',
};

export const NAV = [
  { href: '/articles/', label: 'Articles' },
  { href: '/about/', label: 'About' },
  { href: '/editorial-policy/', label: 'Editorial policy' },
  { href: '/contact/', label: 'Contact' },
];

export const CATEGORIES = [
  'AI for Freelancers',
  'Tutorials & Workflows',
  'Comparisons',
  'AI Tools & Reviews',
] as const;
