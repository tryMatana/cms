'use client';

import { ReactNode } from 'react';
import AppHeader from './AppHeader';
import MenuBar from './MenuBar';

interface NavSidebarProps {
  children?: ReactNode;
}

export default function NavSidebar({ children }: NavSidebarProps) {
  return (
    <>
      <AppHeader />
      <MenuBar />
      {children}
    </>
  );
}
