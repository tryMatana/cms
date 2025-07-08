// app/(admin)/layout.tsx
'use client';

import { useBreakpointValue } from '@chakra-ui/react';
import NavSidebar from '@/components/NavSidebar';
import NavHeader from '@/components/NavHeader';
import { ReactNode } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? (
        <NavSidebar>{children}</NavSidebar> //Mobile view with sidebar
      ) : (
        <NavHeader>{children}</NavHeader> // Desktop view with header
      )}
    </>
  );
}
