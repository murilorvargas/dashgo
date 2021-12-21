import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Murilo Vargas</Text>
          <Text color="gray.300" fontSize="small">
            muriraubach@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Murilo Vargas"
        src="https://github.com/murilorvargas.png"
      />
    </Flex>
  );
};

export default Profile;
