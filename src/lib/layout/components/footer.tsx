import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://matanauniversity.ac.id"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matana University
        </Link>
      </Text>
    </Flex>
  );
};
