import { ActionIcon, Container, Footer, Group, Text, Tooltip } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

const FOOTER_HEIGHT_PX = 48;

export default function AppFooter() {
  return (
    <Footer
      height={FOOTER_HEIGHT_PX}
      mt={-FOOTER_HEIGHT_PX}
      p='xs'
      style={{ position: 'relative' }}
    >
      <Container>
        <Group align='center' position='right'>
          <Text color='dimmed' size='sm'>
            Made by Ian Chen, 2022
          </Text>
          <Tooltip label='View my GitHub!' multiline position='top-end' withArrow>
            <ActionIcon
              component='a'
              href='https://github.com/SkyArrow2177/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconBrandGithub />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Container>
    </Footer>
  );
}
