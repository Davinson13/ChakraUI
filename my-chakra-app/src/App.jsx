import {
  Box,
  Button,
  Grid,
  GridItem,
  Avatar,
  Alert,
  AlertTitle,
  AlertDescription,
  Heading,
  Text,
} from "@chakra-ui/react";

import { InfoIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={6}>
      <Heading mb={4}>Chakra UI Demo (v3)</Heading>

      <Text mb={4}>Example of basic components working with version 3.</Text>

      <Button onClick={toggleColorMode} mb={6}>
        Switch to {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>

      <Alert status="success" mb={6}>
        <InfoIcon />
        <AlertTitle ml={2}>This is an alert</AlertTitle>
        <AlertDescription ml={2}>
          Everything is working correctly in Chakra UI v3.
        </AlertDescription>
      </Alert>

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem bg="red.500" p={4} borderRadius="md">
          Column 1
        </GridItem>
        <GridItem bg="green.300" p={4} borderRadius="md">
          Column 2
        </GridItem>
        <GridItem bg="purple.300" p={4} borderRadius="md">
          Column 3
        </GridItem>

        <GridItem bg="purple.500" p={4} borderRadius="md">
          Column 1
        </GridItem>
        <GridItem bg="red.500" p={4} borderRadius="md">
          Column 2
        </GridItem>
        <GridItem bg="green.300" p={4} borderRadius="md">
          Column 3
        </GridItem>
      </Grid>

      <Box mt={6} display="flex" alignItems="center" gap={3}>
        <Avatar name="Davinson" size="2xl" />
        <Text>Avatar working with Chakra v3</Text>
      </Box>
    </Box>
  );
}
