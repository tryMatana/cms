// src/theme.ts
import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        blue: {
          50: { value: '#ebf8ff' },
          100: { value: '#bee3f8' },
          200: { value: '#90cdf4' },
          300: { value: '#63b3ed' },
          400: { value: '#4299e1' },
          500: { value: '#3182ce' },
          600: { value: '#2b6cb0' },
          700: { value: '#2c5282' },
          800: { value: '#2a4365' },
          900: { value: '#1A365D' },
        },
      },
      fonts: {
        heading: { value: `'Inter', sans-serif` },
        body: { value: `'Inter', sans-serif` },
      },
    },

    recipes: {
      button: {
        variants: {
          solid: {
            container: {
              bg: '{colors.blue.500}',
              color: 'white',
              _hover: {
                bg: '{colors.blue.600}',
              },
              _active: {
                bg: '{colors.blue.700}',
              },
            },
          },
          outline: {
            container: {
              border: '1px solid',
              borderColor: '{colors.blue.500}',
              color: '{colors.blue.500}',
              _hover: {
                bg: '{colors.blue.50}',
              },
            },
          },
        },
      },
    },
  },
});
