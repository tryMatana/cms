// components/AppHeader.tsx
import {
  Flex,
  HStack,
  IconButton,
  Avatar,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/menu';

import { Bell, Home, Grid3X3, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AppHeader() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <Flex
      as="header"
      bgGradient="to-r"
      gradientFrom="blue.600"
      gradientTo="blue.700"
      color="white"
      px={6}
      py={3}
      align="center"
    >
      <Text fontWeight="bold" mr={4}>
        SIM Seleksi Penerimaan Mahasiswa Baru
      </Text>
      <Text fontSize="sm">Matana University</Text>

      <Spacer />

      <HStack gap={3}>
        <IconButton aria-label="notif" variant="ghost">
          <Bell size={18} />
        </IconButton>
        <IconButton aria-label="home" variant="ghost">
          <Home size={18} />
        </IconButton>
        <IconButton aria-label="apps" variant="ghost">
          <Grid3X3 size={18} />
        </IconButton>

        <Menu>
          <MenuButton as={IconButton} variant="ghost" borderRadius="full" p={0}>
            <Avatar.Root>
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
          </MenuButton>
          <MenuList>
            <MenuItem
              icon={<LogOut size={16} />}
              onClick={handleLogout}
              style={{ cursor: 'pointer' }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
}
