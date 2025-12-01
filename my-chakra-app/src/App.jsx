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
      <Heading mb={4}>Demo Chakra UI (v3)</Heading>

      <Text mb={4}>Ejemplo de componentes básicos funcionando con versión 3.</Text>

      <Button onClick={toggleColorMode} mb={6}>
        Cambiar a {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>

      <Alert status="success" mb={6}>
        <InfoIcon />
        <AlertTitle ml={2}>Esto es una alerta</AlertTitle>
        <AlertDescription ml={2}>
          Todo funcionando correctamente en Chakra UI v3.
        </AlertDescription>
      </Alert>

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem bg="red.500" p={4} borderRadius="md">
          Columna 1
        </GridItem>
        <GridItem bg="green.300" p={4} borderRadius="md">
          Columna 2
        </GridItem>
        <GridItem bg="purple.300" p={4} borderRadius="md">
          Columna 3
        </GridItem>

        <GridItem bg="purple.500" p={4} borderRadius="md">
          Columna 1
        </GridItem>
        <GridItem bg="red.500" p={4} borderRadius="md">
          Columna 2
        </GridItem>
        <GridItem bg="green.300" p={4} borderRadius="md">
          Columna 3
        </GridItem>
      </Grid>

      <Box mt={6} display="flex" alignItems="center" gap={3}>
        <Avatar name="Davinson" size="2xl" />
        <Text>Avatar funcionando con Chakra v3</Text>
      </Box>
    </Box>
  );
}
