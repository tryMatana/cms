'use client';

import React, { useState } from 'react';
import { VStack, Input, Button, Heading, Text, Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import axios from '@/lib/axios';
import { AxiosError } from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setError('');
    try {
      const res = await axios.post('/auth/login/', { username, password });
      localStorage.setItem('token', res.data.access);
      router.push('/dashboard');
    } catch (err) {
      const error = err as AxiosError<{ detail: string }>;
      const msg =
        error?.response?.data?.detail ||
        'Login gagal. Periksa username/password.';
      setError(msg);
    }
  };

  return (
    <VStack mt={20} maxW="md" mx="auto">
      <Heading size="lg">Login Admin SIAKAD</Heading>

      {error && (
        <Box w="100%" p={3} bg="red.100" borderRadius="md">
          <Text color="red.800" fontWeight="semibold">
            {error}
          </Text>
        </Box>
      )}

      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button colorScheme="blue" onClick={handleLogin} w="100%">
        Login
      </Button>
    </VStack>
  );
}
