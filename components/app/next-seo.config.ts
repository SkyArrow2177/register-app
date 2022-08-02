import type { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  defaultTitle: 'Family Register',
  description: 'A family register to catalogue treasured articles',
  title: undefined,
  titleTemplate: '%s | Family Register',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
  },
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/meta/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/meta/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/meta/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/meta/site.webmanifest',
    },
  ],

  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#fbdc00',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
};

export default SEO;
