'use client';

import DashboardLayout from '@/layouts/DashboardLayout';
import SidebarDropdown from '@/layouts/SidebarDropdown';

import { useBreakpointValue } from '@chakra-ui/react';

export default function DashboardPage() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {!isMobile ? (
        <SidebarDropdown />
      ) : (
        <DashboardLayout>
          <h1>Selamat datang di Dashboard</h1>
          <p>Ini konten halaman utama dashboard.</p>
        </DashboardLayout>
      )}
    </>
  );

  return (
    // <SidebarDropdown/>
    <DashboardLayout>
      <h1>Selamat datang di Dashboard</h1>
      <p>Ini konten halaman utama dashboard.</p>
    </DashboardLayout>
  );
}
