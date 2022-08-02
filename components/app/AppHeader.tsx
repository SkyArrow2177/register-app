import { Anchor, Container, createStyles, Group, Header } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AppLogo from '@/components/app/AppLogo';
import ColorSchemeToggle from '@/components/app/ColorSchemeToggle';

// Helper types
interface HeaderLink {
  route: string;
  label: string;
  activeRoutes: string[];
}

interface HeaderProps {
  links: HeaderLink[];
}

export default function AppHeader({ links }: HeaderProps) {
  // Component styling
  const { classes, cx } = useStyles();

  // Router to determine initial active page
  const router = useRouter();

  // Get index of current link
  const currRoute = router.pathname;
  const activeLinkIndex = links.findIndex(({ activeRoutes }) =>
    activeRoutes.some(activeRoute => currRoute.startsWith(activeRoute)),
  );

  // Map over links
  const linkNodes = links.map((link, index) => (
    <Link href={link.route} key={link.label}>
      <a
        className={cx(classes.link, {
          [classes.linkActive]: index === activeLinkIndex,
        })}
      >
        {link.label}
      </a>
    </Link>
  ));

  // Create header
  return (
    <Header classNames={{ root: classes.headerBase }} height={48} mb={0}>
      <Container className={classes.headerContainer}>
        <Link href='/' passHref>
          <Anchor component='a' inline>
            <AppLogo />
          </Anchor>
        </Link>
        <Group spacing={5}>
          {linkNodes}
          <ColorSchemeToggle />
        </Group>
      </Container>
    </Header>
  );
}

const useStyles = createStyles(theme => ({
  headerBase: {
    backgroundColor:
      theme.colorScheme === 'dark' ? 'rgba(26, 27, 30, 0.91)' : 'rgba(255, 255, 255, 0.93)',
    backdropFilter: 'blur(3px)',
  },

  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 8px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));
