import { Button, Flex, Image, Text } from "@chakra-ui/react";
import PopcornIcon from "../../assets/popcorn.png";

export function TheHeader() {
  return (
    <Flex
      as="nav"
      p={4}
      pt={8}
      w="full"
      position="relative"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
    >
      <Button
        mr="auto"
        fontSize="4xl"
        fontWeight="800"
        variant="unstyled"
        display="flex"
      >
        <Image src={PopcornIcon} boxSize="40px" />
      </Button>
      <Text fontWeight={600}>Sign in</Text>
      <Text fontWeight={600}>Sign up</Text>
    </Flex>
  );
}
