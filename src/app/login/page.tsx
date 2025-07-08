'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  IconButton,
  Input,
  Skeleton,
} from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/lib/axios';
import { AxiosError } from 'axios';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogin = async () => {
    setError('');
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      return router.push('/admin/dashboard');
    }, 2000);

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
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Stack direction={{ base: 'column', md: 'row' }} w="full" maxW="7xl">
        {/* Left Side (Image) */}
        <Flex flex={1} align="center" justify="center" bg="gray.100">
          <Box>
            <Image
              alt="Login Image"
              aspectRatio={4 / 3}
              src="https://res.cloudinary.com/dexk7lfdc/image/upload/v1751963567/Virtual_Background_Zoom_Matana_Official_desktop_lq1hhn.jpg"
              mx="auto"
            />
          </Box>
        </Flex>

        {/* Right Side (Login Form) */}
        <Flex p={8} flex={1} align="center" justify="center">
          <Stack gap={4} w="full" maxW="md">
            <Heading fontSize="2xl">Welcome to SIAKAD 🎓</Heading>
            <Text color="gray.500" fontSize="sm">
              Please sign in to your account and start the journey
            </Text>

            {error && (
              <Box p={3} bg="red.100" borderRadius="md">
                <Text color="red.800" fontWeight="semibold">
                  {error}
                </Text>
              </Box>
            )}

            <FormControl>
              <FormLabel>Email or Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your email or username"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup borderRadius="md" overflow="hidden" w="full">
                <Input
                  w={'full'}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <InputRightElement bg={'red.300'} h={'full'}>
                  <IconButton
                    variant="ghost"
                    size="sm"
                    aria-label="Show password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            {open ? (
              <Skeleton height="9" width="full" />
            ) : (
              <Button colorPalette="blue" onClick={handleLogin}>
                Masuk
              </Button>
            )}
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}
