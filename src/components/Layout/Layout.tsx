import { Box } from "@chakra-ui/react";
import { TheHeader } from "./TheHeader";

export function Layout() {
  return (
    <Box transition="0.5s ease-out" minHeight="100vh">
      <Box margin="0 auto" maxWidth={1200}>
        <TheHeader />
        <Box as="main" marginY={6} p={4}></Box>
      </Box>
    </Box>
  );
}
