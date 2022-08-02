import { Button, Center, Paper, Space, Text } from '@mantine/core';
import { IconLayoutColumns } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import clipArt from '@/components/app/404.png';
import ContentContainer from '@/components/app/ContentContainer';

export default function NotFound() {
  return (
    <>
      <NextSeo description='404 Page not found' title='Page not found' />
      <ContentContainer size={340} style={{ height: '100%' }}>
        <Center style={{ height: '100%' }}>
          <Paper p='md' pt={2} shadow='xl' style={{ width: '100%' }}>
            <Text color='indigo' component='h1' mb={0} size='xl' weight={700}>
              Oops!
            </Text>
            <Center>
              <Image alt='404 Page not found graphic' height={240} src={clipArt} width={240} />
            </Center>
            <Text>We don't have the page that you were looking for!</Text>
            <Space h='sm' />
            <Link href='/' passHref>
              <Button
                color='indigo'
                component='a'
                fullWidth
                leftIcon={<IconLayoutColumns />}
                variant='light'
              >
                View articles
              </Button>
            </Link>
          </Paper>
        </Center>
      </ContentContainer>
    </>
  );
}
