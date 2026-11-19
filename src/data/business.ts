export const business = {
  name: 'VYOM ENTERPRISES',
  displayName: 'Vyom Enterprises',
  tagline: 'Supply • Service • Trust',
  description: 'Industrial, commercial and institutional supplies matched to your specifications, quantities and delivery needs.',
  address: '09, Nagla Duli, Sirsaganj, Firozabad, Uttar Pradesh, India',
  locality: 'Sirsaganj',
  region: 'Uttar Pradesh',
  postalCountry: 'IN',
  phoneDisplay: '+91 84492 24695',
  phoneE164: '+918449224695',
  whatsappNumber: '918449224695',
  email: 'vyomenterprises@zohomail.in',
  domain: 'vyomenterprisesfirozabad.info',
  url: 'https://vyomenterprisesfirozabad.info',
  logo: '/images/ve-logo.png',
} as const;

export const primaryNavigation = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Products', href: '/products/' },
  { label: 'Capabilities', href: '/capabilities/' },
  { label: 'Contact Us', href: '/contact/' },
] as const;

export const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(business.address);
