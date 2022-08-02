import { Button, Center, Paper, Space, Text } from '@mantine/core';
import { IconLayoutColumns } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';

import clipArt from '@/components/404/404.png';

export default function NotFoundCard() {
  return (
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
  );
}
