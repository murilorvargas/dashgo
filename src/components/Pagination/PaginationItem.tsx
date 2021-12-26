import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  number: number;
  // eslint-disable-next-line react/require-default-props
  isCurrent?: boolean;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}

const PaginationItem = ({
  onPageChange,
  isCurrent = false,
  number,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'dafault' }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};

export default PaginationItem;
