import { Text } from '@mantine/core';
import type { NextPage } from 'next';

import AppLogo from '@/components/app/AppLogo';
import ColorSchemeToggle from '@/components/app/ColorSchemeToggle';

const Home: NextPage = () => {
  return (
    <>
      <Text>Hello</Text>
      <AppLogo />
      <ColorSchemeToggle />
    </>
  );
};

export default Home;
