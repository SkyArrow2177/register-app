import { AppShell, Space } from '@mantine/core';
import type { ReactNode } from 'react';

import AppFooter from '@/components/app/AppFooter';
import AppHeader from '@/components/app/AppHeader';

interface AppLayoutProps {
  children: ReactNode;
}

const links = [
  { route: '/view', label: 'View', activeRoutes: ['/view'] },
  { route: '/create', label: 'Create', activeRoutes: ['/create'] },
];

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppShell
      fixed
      footer={<AppFooter />}
      header={<AppHeader links={links} />}
      sx={theme => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
      })}
    >
      {children}
      <Space h={60} />
    </AppShell>
  );
}
