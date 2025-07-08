'use client';

import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  List,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  ClipboardList,
  EarthIcon,
  FolderClosed,
  House,
  Menu,
  Settings,
  User,
  Users,
} from 'lucide-react';
import React, { ReactNode } from 'react';

type ListItemType = {
  text?: string;
  icon: React.ElementType;
};

interface NavSidebarProps {
  children?: ReactNode;
}

const listItems: ListItemType[] = [
  { text: 'Home', icon: House },
  { text: 'Settings', icon: Settings },
  { text: 'Users', icon: Users },
  { text: 'Tasks', icon: ClipboardList },
  { text: 'Folder', icon: FolderClosed },
];

export default function NavSidebar({ children }: NavSidebarProps) {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Header */}
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        h="16"
        py="2.5"
        pr="2.5"
        bg="gray.50"
        color="gray.900"
      >
        <HStack gap={2}>
          <IconButton
            onClick={open ? onClose : onOpen}
            fontSize="18px"
            variant="ghost"
            aria-label="open menu"
          >
            <Menu size="20" />
          </IconButton>
          <Heading as="h1" size="md">
            Brand
          </Heading>
        </HStack>
        <HStack gap="1">
          <IconButton
            variant="ghost"
            rounded={'full'}
            size="md"
            aria-label="earth icon"
          >
            <EarthIcon size="20" />
          </IconButton>
          <IconButton rounded={'full'} size="md" aria-label="user icon">
            <User size="20" />
          </IconButton>
        </HStack>
      </Flex>

      {/* Sidebar + Content */}
      <HStack align="start" gap={0}>
        <Box
          as="aside"
          minH="calc(100vh - 4rem)"
          w={open ? 72 : 12}
          borderRight="2px"
          borderColor="gray.200"
          transition="width 0.25s ease"
        >
          <List.Root p="0.5">
            {listItems.map((item, index) => (
              <ListElement
                key={index}
                icon={item.icon}
                text={open ? item.text : ''}
              />
            ))}
          </List.Root>
        </Box>

        <Flex
          as="main"
          w="full"
          minH="calc(100vh - 4rem)"
          px={4}
          py={6}
          bg="white"
        >
          {children}
        </Flex>
      </HStack>
    </>
  );
}

const ListElement = ({ icon, text }: ListItemType) => {
  return (
    <ListItem
      as={HStack}
      h="10"
      pl="2.5"
      cursor="pointer"
      _hover={{ bg: 'gray.50' }}
      rounded="md"
    >
      <List.Indicator boxSize={5} as={icon} />
      {text && <Text>{text}</Text>}
    </ListItem>
  );
};
