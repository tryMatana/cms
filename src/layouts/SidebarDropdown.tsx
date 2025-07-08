'use client';

import { Button, Text, HStack } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { FiBook, FiUsers, FiHome, FiChevronDown } from 'react-icons/fi';
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

export default function SidebarDropdown() {
  return (
    <HStack>
      <Link href="/dashboard">
        <HStack>
          <FiHome />
          <Text>Beranda</Text>
        </HStack>
      </Link>
      {dropdownMenus.map((menu) => (
        <Menu key={menu.label} isLazy>
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
  );
}
