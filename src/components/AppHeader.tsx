// components/AppHeader.tsx
import {
  Flex,
  HStack,
  IconButton,
  Avatar,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { Menu, MenuList, MenuItem } from '@chakra-ui/menu';

import { Bell, Home, Grid3X3, LogOut } from 'lucide-react';

export default function AppHeader() {
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
          <Avatar.Root>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
          <MenuList>
            <MenuItem>
              <LogOut size={16} />
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
}
