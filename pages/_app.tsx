import type { MantineThemeOverride } from '@mantine/core';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import type { ColorScheme } from '@mantine/styles';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { setCookies } from 'cookies-next';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useState } from 'react';

import AppLayout from '@/components/app/AppLayout';
import SEO from '@/components/app/next-seo.config';

type CustomAppProps = AppProps & {
  initialColorScheme: ColorScheme;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps, initialColorScheme }: CustomAppProps) {
  // Dark mode support
  const [colorScheme, setColorScheme] = useState<ColorScheme>(initialColorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  const themeOverride: MantineThemeOverride = {
    colorScheme,
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={themeOverride} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <QueryClientProvider client={queryClient}>
            <DefaultSeo {...SEO} />
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
