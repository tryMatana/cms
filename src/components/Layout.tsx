// components/Layout.tsx
import { Box } from '@chakra-ui/react';
import AppHeader from './AppHeader';
import MenuBar from './MenuBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <MenuBar />
      <Box p={6}>{children}</Box>
    </>
  );
}
