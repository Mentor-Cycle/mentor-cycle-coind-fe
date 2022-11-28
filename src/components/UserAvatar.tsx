import { Box, FlexProps } from '@chakra-ui/react';
import { theme } from '../styles/Theme';

interface UserAvatarProps extends FlexProps {
  avatarUrl: string;
  avatarSize: string;
  logoUrl: string;
  logoSize: string;
}

export default function UserAvatar({
  avatarUrl,
  logoUrl,
  logoSize,
  avatarSize,
  ...rest
}: UserAvatarProps) {
  return (
    <Box position="relative">
      {/* Team Logo */}
      <Box
        bgImage={logoUrl}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={logoSize}
        w={logoSize}
        rounded="full"
        position="absolute"
        left="0"
        top="0"
        zIndex="2"
      />

      {/* Avatar Image */}
      <Box
        bgImage={avatarUrl}
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={avatarSize}
        w={avatarSize}
        rounded="full"
        border="2px"
        borderColor={theme.colors.primary}
        {...rest}
      />
    </Box>
  );
}
