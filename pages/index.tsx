import { Text } from '@mantine/core';
import type { NextPage } from 'next';

import ColorSchemeToggle from '@/components/app/ColorSchemeToggle';

const Home: NextPage = () => {
  return (
    <>
      <Text>Hello</Text>
      <ColorSchemeToggle />
    </>
  );
};

export default Home;
