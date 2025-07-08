// components/MenuBar.tsx
'use client';

import { FiBook, FiUsers, FiHome, FiChevronDown } from 'react-icons/fi';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { Box, HStack, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

const dropdownMenus = [
  {
    label: 'Akademik',
    icon: FiBook,
    children: [
      { label: 'Kurikulum', href: '/dashboard/kurikulum' },
      { label: 'Mata Kuliah', href: '/dashboard/matakuliah' },
    ],
  },
  {
    label: 'Mahasiswa',
    icon: FiUsers,
    children: [
      { label: 'Data Mahasiswa', href: '/dashboard/mahasiswa' },
      { label: 'Kelas', href: '/dashboard/kelas' },
    ],
  },
];
export default function MenuBar() {
  return (
    <Box
      bgGradient="to-r"
      gradientFrom="blue.600"
      gradientTo="blue.700"
      px={6}
      py={2}
    >
      <HStack px="2.5">
        <Link href="/dashboard">
          <HStack>
            <FiHome />
            <Text>Beranda</Text>
          </HStack>
        </Link>
        {dropdownMenus.map((menu) => (
          <Menu key={menu.label}>
            <MenuButton as={Button} variant="ghost">
              <HStack>
                <menu.icon />
                <Text>{menu.label}</Text>
                <FiChevronDown />
              </HStack>
            </MenuButton>
            <MenuList>
              {menu.children.map((child) => (
                <Link key={child.label} href={child.href} passHref>
                  <MenuItem as="a">{child.label}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        ))}
      </HStack>
    </Box>
  );
}
