import { Text } from '@mantine/core';
import { NextSeo } from 'next-seo';

export default function About() {
  return (
    <>
      <NextSeo description={'About description'} title={'About'} />
      <Text>About</Text>
    </>
  );
}
