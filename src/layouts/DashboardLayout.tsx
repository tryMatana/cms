/*
  Struktur layout Dashboard dengan Sidebar toggle dan Profile dropdown:
  - Sidebar (bisa ditampilkan/sembunyikan)
  - Header (ikon profil dengan dropdown)
  - Footer (opsional)
  - Konten utama
*/

'use client';

import {
  Box,
  Flex,
  IconButton,
  Text,
  VStack,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FiLogOut,
  FiUser,
  FiHome,
  FiBook,
  FiUsers,
  FiMenu,
} from 'react-icons/fi';
import { ReactNode, useState } from 'react';

const menuItems = [
  { name: 'Beranda', icon: FiHome, path: '/dashboard' },
  { name: 'Mahasiswa', icon: FiUsers, path: '/dashboard/mahasiswa' },
  { name: 'Kurikulum', icon: FiBook, path: '/dashboard/kurikulum' },
];

function Sidebar({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <VStack
      align="start"
      p={4}
      w="64"
      minH="100vh"
      bg="gray.100"
      position="fixed"
      overflowY="auto"
    >
      <Text fontSize="2xl" fontWeight="bold">
        SIAKAD
      </Text>
      {menuItems.map((item) => (
        <Link key={item.name} href={item.path} passHref>
          <HStack
            as="button"
            w="full"
            px={3}
            py={2}
            rounded="md"
            _hover={{ bg: 'gray.200' }}
          >
            <item.icon />
            <Text>{item.name}</Text>
          </HStack>
        </Link>
      ))}
    </VStack>
  );
}

function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const router = useRouter();

  const handleLogout = () => {
    // localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <Flex
      as="header"
      w="full"
      h="16"
      px={6}
      align="center"
      bg="white"
      borderBottom="1px solid #e2e8f0"
    >
      <IconButton
        aria-label="Toggle Sidebar"
        variant="ghost"
        mr={4}
        onClick={onToggleSidebar}
      >
        <FiMenu />
      </IconButton>
      <Text fontWeight="semibold">Dashboard</Text>
      <Spacer />
      <Menu>
        <MenuButton as={IconButton} aria-label="User menu" variant="ghost">
          <FiUser />
        </MenuButton>
        <MenuList>
          <MenuItem icon={<FiUser />}>Profil</MenuItem>
          <MenuItem icon={<FiLogOut />} onClick={handleLogout}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

function Footer() {
  return (
    <Flex
      as="footer"
      h="10"
      align="center"
      justify="center"
      fontSize="sm"
      color="gray.500"
    >
      © {new Date().getFullYear()} Universitas Matana
    </Flex>
  );
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Flex minH="100vh">
      <Sidebar isOpen={sidebarOpen} />
      <Box
        ml={sidebarOpen ? '64' : '0'}
        w="full"
        minH="100vh"
        bg="gray.50"
        display="flex"
        flexDirection="column"
        transition="margin-left 0.2s ease"
      >
        <Header onToggleSidebar={toggleSidebar} />
        <Box as="main" px={6} py={4} flex="1">
          {children}
        </Box>
        <Footer />
      </Box>
    </Flex>
  );
}
