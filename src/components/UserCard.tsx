import { Badge, ChakraStyledOptions, Flex, Text } from '@chakra-ui/react';
import { theme } from '../styles/Theme';
import UserAvatar from './UserAvatar';

interface UserCardProps extends ChakraStyledOptions {
  avatarUrl: string;
  logoUrl: string;
  userName: string;
  points: number;
  role: string;
  roleColor: string;
}
export default function UserCard({
  avatarUrl,
  logoUrl,
  userName,
  points,
  role,
  roleColor,
  ...rest
}: UserCardProps) {
  return (
    <Flex
      bg={theme.colors.gray}
      p={2}
      {...rest}
      w="100%"
      rounded="md"
      align="center"
      justify="space-evenly"
    >
      <UserAvatar
        avatarSize="50px"
        avatarUrl={avatarUrl}
        logoSize="15px"
        logoUrl={logoUrl}
      />
      <Text>{userName}</Text>
      <Badge bg={roleColor} rounded="full" size="sm">
        {role}
      </Badge>

      <Text>{points}MC</Text>
    </Flex>
  );
}
